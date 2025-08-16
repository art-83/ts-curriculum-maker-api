import { UserStackDTO } from "../dtos/user-stack.dto";
import { UserStack } from "../models/entity/user-stack.entity";
import { LangEnum } from "../models/enums/lang.enum";
import { FrameworkEnum } from "../models/enums/framework.enum";
import { DatabaseEnum } from "../models/enums/database.enum";

export class UserStackMapper {
    
    reqToEntity(userStackData: UserStackDTO): UserStack {
        const {langs, frameworks, databases} = userStackData;
        return new UserStack(langs as LangEnum[], frameworks as FrameworkEnum[], databases as DatabaseEnum[]);
    }
}