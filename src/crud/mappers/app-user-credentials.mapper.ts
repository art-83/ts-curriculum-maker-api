import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { BcryptManager } from "../managers/bcrypt.manager";
import { AppUserValidator } from "../middlewares/validation/app-user.validator";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";

export class AppUserCredentialsMapper {

    private readonly appUserValidator: AppUserValidator = new AppUserValidator();
    private readonly bcryptManager: BcryptManager = new BcryptManager();

    public async toEntity(appUserCredentialsDTO: AppUserCredentialsDTO): Promise<AppUserCredentials> {
        const passwordHash = await this.bcryptManager.encrypt(appUserCredentialsDTO.password);
        const cpfHash = await this.bcryptManager.encrypt(appUserCredentialsDTO.cpf);
        return new AppUserCredentials(
            appUserCredentialsDTO.email,
            passwordHash,
            cpfHash,
            appUserCredentialsDTO.role
        );
    }
}