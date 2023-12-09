import { getXataClient } from '../src/xata.js';
import dotenv from 'dotenv'

dotenv.config({ path: "./.env" })

export const getUsers = async (req, res) => {

 const xata = getXataClient({ api_key: process.env.XATA_API_KEY });
 const records = await xata.db.Users.select([
  "id",
  "name",
  "email",
  "Password",
 ]).getAll();

 return res.status(200).json(records)



}
