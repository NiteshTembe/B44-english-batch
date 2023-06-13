import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function genRandomString() {
  const salt = await bcrypt.genSalt(3);
  return encodeURIComponent(salt);
}

export async function updateUserByEmail(email, updateData) {
  return await client
      .db("zen_class_db")
      .collection("users")
      .updateOne({ email: email }, { $set: updateData });
  }

export async function getAllUsers() {
    return await client
    .db("zen_class_db")
    .collection("users")
    .find()
    .toArray();
    }

export async function createUser( user_name, phone_number, user_role, email, hashedPassword) {
  return await client
    .db("zen_class_db")
    .collection("users")
    .insertOne({ user_name, phone_number, user_role, email, password: hashedPassword });
}

export async function checkUserExist(email){
  return await client
    .db("zen_class_db")
    .collection("users")
    .findOne({ email: email});
}

export async function checkRefreshTokenExist(refreshToken){
  return await client
    .db("zen_class_db")
    .collection("users")
    .findOne( { refreshToken: refreshToken } );
}

export async function checkLoginExist(email, hashedPassword){
  return await client
    .db("zen_class_db")
    .collection("users")
    .findOne({ email: email , password: hashedPassword});
}

export async function checkRecoveryString(recoveryString){
  return await client
    .db("zen_class_db")
    .collection("users")
    .findOne({ $and :[
      { recoveryString: recoveryString },
      {linkExpiryTime : { $gte : new Date(Date.now()) }}
    ]});
}