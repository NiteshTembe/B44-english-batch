import express from "express";
import { checkRecoveryString, checkUserExist, createUser, genPassword, genRandomString, updateUserByEmail } from "../helper.js";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
dotenv.config();

//signup
router.post("/signup", async (req, res) => {
    const { user_name, phone_number, user_role, email, password, confirm_password } = req.body;
    //validation
    const isUserExist = await checkUserExist(email);
    if (isUserExist) {
      res.status(400).send({ message: "Email already Taken" });
      return;
    }
    if (
      !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&_]).{8,}$/g.test(
        password
      )
    ) {
      res.status(400).send({ message: "Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character" });
      return;
    }
    if(password !== confirm_password){
      res.status(400).send({ message: "Password and Confirm Password Not Matching" });
      return;
    }
    if(user_role !== "Student" && user_role !=="Admin"){
      res.status(400).send({ message: "Select one of this Student/Admin" });
      return;
    }
    // generate hashed password and save user in database
    const hashedPassword = await genPassword(password);
    const result = await createUser( user_name, phone_number, user_role, email, hashedPassword);
    if(result.acknowledged === true){
      res.send({ message: "User Successfully Registered" });
      return;
  }
  });
  
  //login
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const cookies = req.cookies;
    //validate email
    const userFromDb = await checkUserExist(email);
    if (!userFromDb) {
      res.status(400).send({ message: "Invalid Credentials" });
      return;
    }
    //validate password
    const storedDbPassword = userFromDb.password;
    const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
    if (!isPasswordMatch) {
      res.status(400).send({ message: "Invalid Credentials" });
      return;
    }
    // create JWTs
    // const token = jwt.sign({ id: userFromDb._id }, process.env.SECRET_KEY);
    const accessToken = jwt.sign(
        { 
            "UserInfo": {
                "user_email": userFromDb.email,
                "role": userFromDb.user_role
            }
         },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15s' }
    );
    const newRefreshToken = jwt.sign(
        { 
            "UserInfo": {
                "user_email": userFromDb.email,
                "role": userFromDb.user_role
            }
         },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '30s' }
    );
    // let newRefreshTokenArray =
    //     !cookies?.jwt
    //         ? userFromDb.refreshToken
    //         : userFromDb.refreshToken.filter(rt => rt !== cookies.jwt);

    //     if (cookies?.jwt) {

    //       const refreshToken = cookies.jwt;

    //       const foundToken = await User.findOne({ refreshToken }).exec();
    //       // Detected refresh token reuse!
    //       if (!foundToken) {
    //           // clear out ALL previous refresh tokens
    //           newRefreshTokenArray = [];
    //       }

    //       res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    //     }

      // Saving refreshToken with current user
      userFromDb.refreshToken = [newRefreshToken];
      const result = await updateUserByEmail(userFromDb.email,userFromDb);

      // Creates Secure Cookie with refresh token
      res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

      // Send authorization roles and access token to user
      res.json({ accessToken ,
        "user_role": userFromDb.user_role,
        "email": userFromDb.email,
        "user_name": userFromDb.user_name });
      return;
      res.status(400).send({message:"Something Went Wrong!"});
  });

//Forgot Password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  //validation if user exist
  const isUserExist = await checkUserExist(email);
  if (isUserExist) {

    const randomString = await genRandomString(email);
    isUserExist.recoveryString = randomString;
    isUserExist.linkExpiryTime = new Date(Date.now()+1000*60*15);
    const updateUserData = await updateUserByEmail(email, isUserExist);
    if(updateUserData.modifiedCount || updateUserData.upsertedCount){
     
        try {

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.MAILPASSWORD
                }
            });
            let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Password Recovery Email",
                html: `<h4> Please Click On Link Given to Reset Your Password <br/><a href="${fullUrl}/${randomString}" >Password Reset Link</a><br/>This Link will Expire in 15 Minutes</h4>`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("Error" + error)
                } else {
                                
                    console.log("Email sent:" + info.response);
                    res.status(201).send({status:201,info})
                }
            })

        } catch (error) {
            console.log("Error" + error);
            res.status(401).send({status:401,error})
        }
    }
    else{
        res.status(400).send({message : "Something Went Wrong! Please Try Again"});
    }
  }
  else{
    res.status(400).send({message : "Email not Exist"});
  }
});

// Recovery Mail
router.get("/forgot-password/:recoveryString", async (req, res) => {
    const { recoveryString } = req.params;
    const encodedString = encodeURIComponent(recoveryString);
    const userData = await checkRecoveryString(encodedString);
  if (userData) {
    res.send({message : "Valid Link"})
    return;
  }
  res.status(400).send({message:"Invalid Link"})

});
export const authRouter = router;
