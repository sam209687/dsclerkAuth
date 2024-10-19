"use server";

import UserModel from "@/models/User";
import { dbConnect } from "../../db";

export async function createUser(user: any) {
    try {
        await dbConnect();
        const newUser = await UserModel.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}