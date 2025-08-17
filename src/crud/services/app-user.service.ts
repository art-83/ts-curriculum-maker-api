import { ca } from "zod/v4/locales/index.cjs";
import { appUserCredentialsRepository } from "../datasource/data-source.config";
import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { AppUserCredentialsMapper } from "../mappers/app-user-credentials.mapper";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";

export class AppUserService {

    appUserCredentialsMapper: AppUserCredentialsMapper = new AppUserCredentialsMapper();

    async saveAppUserCredentials(appUserCredentialsDTO: AppUserCredentialsDTO): Promise<AppUserCredentialsDTO> {
        const appUserCredential = await this.appUserCredentialsMapper.toEntity(appUserCredentialsDTO);
        await appUserCredentialsRepository.save(appUserCredential);
        return appUserCredentialsDTO;
    }
}