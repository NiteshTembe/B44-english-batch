import express from "express";
import * as dotenv from "dotenv";
import { getAllUsers } from "../helper.js";

const router = express.Router();
dotenv.config();

router.get("/all", async (req, res) => {

      const allUsers = await getAllUsers();
      //  console.log(allUsers)
      if (!allUsers) return res.status(204).json({ 'message': 'No users found' });
    res.json(allUsers);
    return
})

export const usersRouter = router;
