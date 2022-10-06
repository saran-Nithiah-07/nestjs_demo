import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';

@Injectable()
export class StudentService {

    constructor(@InjectModel('student') private StudentModel: Model<Student>) {}

    async getStudents(): Promise<Student[]> {
        return await this.StudentModel.find().exec();
    }

    async getOneStudent(id: string): Promise<Student> {
        return await this.StudentModel.findById(id).exec();
    }

    async updateOneStudent(id: string , data: StudentDTO): Promise<Student> {
        return await this.StudentModel.findOneAndUpdate({_id: id} , data , {new: true}).exec();
    }

    async deleteOneStudent(id: string): Promise<Student> {
        return await this.StudentModel.findOneAndDelete({_id: id}).exec();
    }
    
    async createStudent(data: StudentDTO): Promise<Student> {
        const student =  new this.StudentModel();
        return await student.save();
    }
}