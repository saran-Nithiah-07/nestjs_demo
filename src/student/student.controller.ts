import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { get } from 'http';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    @Get()
    async getAllStudent(): Promise<Student[]> {
        return this.studentService.getStudents();
    }

    @Get(':id')
    async getOneStudent(@Param('id') id: string): Promise<Student> {
        return this.studentService.getOneStudent(id);
    }

    @Put(':id')
    async updateOneStudent(@Param('id') id: string, @Body() data: StudentDTO): Promise<Student>  {
        return this.studentService.updateOneStudent(id , data);
    }

    @Delete(':id')
    async deleteOneStudent(@Param('id') id: string): Promise<Student>  {
        return this.studentService.deleteOneStudent(id);
    }
    
    @Post()
    async createStudent(@Body() data: StudentDTO): Promise<Student> {
        return await this.studentService.createStudent(data);
    }
}

