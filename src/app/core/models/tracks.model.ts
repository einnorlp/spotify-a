import { ArtistModel } from "./artist.model";

export interface TrackModel{
    name:String;
    album: String;
    cover:string;   
    url:string;
    _id:string | number;
    artist?:ArtistModel;
}