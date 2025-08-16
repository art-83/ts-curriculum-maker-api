import { DatabaseEnum } from "../models/enums/database.enum";
import { FrameworkEnum } from "../models/enums/framework.enum";
import { LangEnum } from "../models/enums/lang.enum";

export interface UserStackDTO {
    langs: LangEnum[];
    frameworks: FrameworkEnum[];
    databases: DatabaseEnum[];
}