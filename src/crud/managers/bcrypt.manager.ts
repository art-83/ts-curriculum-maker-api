import bcrypt from "bcryptjs"
import e from "express";

export class BcryptManager {
    public async encrypt(data: string): Promise<string> {
        try {
            const salt = await bcrypt.genSalt(10);
            const dataHash = await bcrypt.hash(data, salt);
            return dataHash;
        } catch(error) {
            throw new Error("Fail encrypting password.");
        }
    }
    
    public async verifyPassword(data: string, dataHash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(data, dataHash);
        } catch(error) {
            throw new Error("Fail verifying password.");
        }
    }
}