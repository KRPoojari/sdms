import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentDto } from './dto/student.dto';
import { STUDENT_REPOSITORY } from '../../core/constants';

@Injectable()
export class StudentsService {

    constructor(@Inject(STUDENT_REPOSITORY) private readonly studentRepository: typeof Student) { }

    async create(student: StudentDto): Promise<Student> {
        return await this.studentRepository.create<Student>(student);
    }
}