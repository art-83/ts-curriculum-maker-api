import { appUserCredentialsRepository } from "../datasource/data-source.config";
import { AppUserCredentialsType } from "../types/app-user-credentials";
import { BcryptManager } from "../managers/bcrypt.manager";
import { AppUserCredentialsMapper } from "../mappers/app-user-credentials.mapper";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";
import { AppUserLoginRequestType } from "../types/app-user-login-request";
import { JwtService } from "../auth/jwt/jwt-service.auth";
import { JwtPayload } from "../types/jwt-payload";
import { th } from "zod/v4/locales/index.cjs";

export class AppUserService {

    private readonly appUserCredentialsMapper: AppUserCredentialsMapper;
    private readonly bcryptManager: BcryptManager;
    private readonly jwtService: JwtService;

    constructor() {
        this.appUserCredentialsMapper = new AppUserCredentialsMapper();
        this.bcryptManager = new BcryptManager();
        this.jwtService = new JwtService();
    }

    public async registerAppUserCredentials(appUserCredentialsDTO: AppUserCredentialsType): Promise<AppUserCredentials> {
        try {
            const appUserCredential = await this.appUserCredentialsMapper.toEntity(appUserCredentialsDTO);
            const appUserCredentialInDatabase = await appUserCredentialsRepository.save(appUserCredential);
            appUserCredentialInDatabase.createdAt.setHours(new Date().getHours() - 3);
            return appUserCredentialInDatabase;
        } catch(error) {
            throw new Error("Fail to persist user in database.");
        }
    }

    public async loginAppUserCredentials(appUserLoginRequest: AppUserLoginRequestType): Promise<string> {
        try {
            const appUserCredential = await appUserCredentialsRepository.findOneBy({email: appUserLoginRequest.email});
            if(appUserCredential == null) {
                throw Error("User not found.");
            }
            if(!await this.bcryptManager.verifyPassword(appUserLoginRequest.password, appUserCredential.password)) {
                throw Error("Password does not matches.");
            }
            const payload: JwtPayload = {
                id: appUserCredential.id,
                role: appUserCredential.role
            }
            return this.jwtService.generateToken(payload);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}