import { appUserCredentialsRepository } from "../datasource/data-source.config";
import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { AppUserCredentialsMapper } from "../mappers/app-user-credentials.mapper";

export class AppUserService {

    private readonly appUserCredentialsMapper: AppUserCredentialsMapper = new AppUserCredentialsMapper();

    public async saveAppUserCredentials(appUserCredentialsDTO: AppUserCredentialsDTO): Promise<AppUserCredentialsDTO> {
        const appUserCredential = await this.appUserCredentialsMapper.toEntity(appUserCredentialsDTO);
        await appUserCredentialsRepository.save(appUserCredential);
        return appUserCredentialsDTO;
    }
}