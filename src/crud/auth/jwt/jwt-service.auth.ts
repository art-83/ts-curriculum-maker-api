import jwt from "jsonwebtoken";
import fs from "fs";
import { JwtPayload } from "../../types/jwt-payload";

export class JwtService {
    private readonly rsaPublicKey = fs.readFileSync(__dirname + "/../../../../public.pem");
    private readonly rsaPrivateKey = fs.readFileSync(__dirname + "/../../../../private.pem")

    public generateToken(jwtPayload: JwtPayload): string {
        return jwt.sign(jwtPayload, this.rsaPrivateKey, {algorithm: "RS256", expiresIn: "1h"});
    }
}