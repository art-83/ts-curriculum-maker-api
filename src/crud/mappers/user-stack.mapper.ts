import { UserStackDTO } from "../dtos/user-stack.dto";
import { UserStack } from "../models/stack/entity/user-stack.entity";
import { LangEnum } from "../models/stack/enums/lang.enum";
import { FrameworkEnum } from "../models/stack/enums/framework.enum";
import { DatabaseEnum } from "../models/stack/enums/database.enum";

export class UserStackMapper {
    
    reqToEntity(userStackData: UserStackDTO): UserStack {
        const {langs, frameworks, databases} = userStackData;
        return new UserStack(langs as LangEnum[], frameworks as FrameworkEnum[], databases as DatabaseEnum[]);
    }
}