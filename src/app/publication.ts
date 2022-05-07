import { Commentaire } from "./commentaire";
import { UploadImagePublication } from "./upload-image-publication";
import { User } from "./user";
import { Vote } from "./vote";
enum type {
    sport,film,politique,other
}

export class Publication {
    idpub: number;
    dateC: Date;
    note: number;
    type: type;
    description: string;
    iduser:User;
    image:UploadImagePublication;
    vote:Vote;
    commentaire:Commentaire;
    

}

