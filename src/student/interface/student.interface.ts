import { Document } from "mongoose"; 

export interface Student extends Document{
    readonly name: String;
    readonly age: Number;
    readonly city: String;
    readonly mobile_number: Number;
    readonly email_id : string;
}