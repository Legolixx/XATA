import express from "express";
import { getUsers } from '../controllers/auth.js';

const router = express.Router();

router.get("/getusers", getUsers)

export default router;