import { DatabaseEnum } from "../models/stack/enums/database.enum";
import { FrameworkEnum } from "../models/stack/enums/framework.enum";
import { LangEnum } from "../models/stack/enums/lang.enum";

export interface UserStackDTO {
    langs: LangEnum[];
    frameworks: FrameworkEnum[];
    databases: DatabaseEnum[];
}