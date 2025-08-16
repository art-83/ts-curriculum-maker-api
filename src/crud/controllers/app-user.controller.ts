import { Request, Response } from "express";
import { AppUserService } from "../services/app-user.service";
import { AppUserDTO } from "../dtos/app-user.dto";

const userService = new AppUserService();

export class AppUserController {
    async create(req: Request<{}, {}, AppUserDTO>, res: Response) {
        try {
            const createdUser = await userService.createUser(req);
            return res.status(201).json(createdUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error persisting 'AppUser'." });
        }
    }
}
