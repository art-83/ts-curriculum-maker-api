import { appUserCredentialsRepository } from "../datasource/data-source.config";
import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { AppUserCredentialsMapper } from "../mappers/app-user-credentials.mapper";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";

export class AppUserService {

    private readonly appUserCredentialsMapper: AppUserCredentialsMapper = new AppUserCredentialsMapper();

    public async saveAppUserCredentials(appUserCredentialsDTO: AppUserCredentialsDTO): Promise<AppUserCredentials> {
        const appUserCredential = await this.appUserCredentialsMapper.toEntity(appUserCredentialsDTO);
        const appUserCredentialInDatabase = await appUserCredentialsRepository.save(appUserCredential);
        
        appUserCredentialInDatabase.createdAt.setHours(new Date().getHours() - 3);
        
        return appUserCredentialInDatabase;
    }
}