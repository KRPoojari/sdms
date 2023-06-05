import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { studentsProviders } from './students.providers';

@Module({
  providers: [StudentsService, ...studentsProviders],
  exports: [StudentsService]
})
export class StudentsModule {}
