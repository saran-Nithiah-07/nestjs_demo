import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    mobile_number: Number,
    email_id : String,
  });