import { DatabaseEnum } from "../models/enums/stack-database.enum";
import { FrameworkEnum } from "../models/enums/stack-framework.enum";
import { LangEnum } from "../models/enums/stack-lang.enum";

export interface UserStackType {
    langs: LangEnum[];
    frameworks: FrameworkEnum[];
    databases: DatabaseEnum[];
}