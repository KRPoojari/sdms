import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { classProviders } from './class.providers';

@Module({
  providers: [ClassService, ...classProviders],
  exports: [ClassService]
})
export class ClassModule {}
