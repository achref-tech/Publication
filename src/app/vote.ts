import { Publication } from "./publication";
import { UploadImagePublication } from "./upload-image-publication";
import { User } from "./user";

export class Vote {
    id:string;
    note:string;
    publication:Publication;
    image:UploadImagePublication;
    user:User;
}
