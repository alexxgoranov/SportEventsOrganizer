import { DocumentDefinition, FilterQuery } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";


export async function
    createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try {
        return await UserModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function validateUser({ candidateEmail, candidatePassword }: { candidateEmail: string, candidatePassword: string }) {
    try {
        const existedUser = await UserModel.findOne({ candidateEmail })
        if (!existedUser) {
            return false;
        }
        const isValidUser = await existedUser.comparePassword(candidatePassword);

        if(!isValidUser) return false;

        return existedUser;

    }
    catch (e: any) {
    }

}

export async function findUser(query: FilterQuery<UserDocument>){

    return UserModel.findOne(query).lean();

}