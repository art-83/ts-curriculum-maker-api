import bcrypt from "bcryptjs"

export class BcryptManager {
    async encrypt(data: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const dataHash = await bcrypt.hash(data, salt);
        return dataHash;
    }
    
    async verifyPassword(data: string, dataHash: string): Promise<boolean> {
        return await bcrypt.compare(data, dataHash);
    }
}