import mysql2 from "mysql2/promise";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handler(req : NextApiRequest,res : NextApiResponse) {
    const connection = await mysql2.createPool({
        host : "127.0.0.1",
        user : "root",
        password : "",
        database : "mui-app",
        connectionLimit : 10000
    })

    const data_users = await connection.query("SELECT * FROM users");
    res.status(200).json(data_users);
}