import { Publication } from "./publication";
import { User } from "./user";

export class Commentaire {
    idComm: number;
    comment:string;
    iduser:User;
    idpub:Publication;
}
