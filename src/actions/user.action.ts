"use server";

import UserModel from "@/models/User";
import { dbConnect } from "../../db";
interface User {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    phone: string;
}
export async function createUser(user: User) {
    try {
        await dbConnect();
        const newUser = await UserModel.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}