import { AppUser } from "../models/user/app-user.entity";

/*
    {
        "name": "your-beautiful-name",
        "email": "your-amazing-email",
        "password": "your-super-secret-password",
        "cpf": "your-greatest-and-unique-cpf",
        "role": "your-not-bossy-role" (optional key; values = USER, ADMIN; default = USER),
        "stack": {
            "langs": [PYTHON, C... OBJECTIVEC],
            "frameworks": [REACT, VUE... DOTNET],
            "databases":[POSTGRES, MYSQL... MICROSOFTSQLSERVER]
        }
    }
*/

export class AppUserMapper {
    public requestToEntity(userData: Request): AppUser {

    }
}