import { AppUserCredentialsType } from "../types/app-user-credentials";
import { BcryptManager } from "../managers/bcrypt.manager";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";

export class AppUserCredentialsMapper {

    private readonly bcryptManager: BcryptManager;

    constructor() {
        this.bcryptManager = new BcryptManager();
    }

    public async toEntity(appUserCredentialsType: AppUserCredentialsType): Promise<AppUserCredentials> {
        try {
            const passwordHash = await this.bcryptManager.encrypt(appUserCredentialsType.password);
            return new AppUserCredentials(
                appUserCredentialsType.email,
                passwordHash,
                appUserCredentialsType.cpf,
                appUserCredentialsType.role
            );
        } catch(error) {
            throw new Error("Fail in parsing request body into entity.");
        }
    }
}