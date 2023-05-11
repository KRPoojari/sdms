import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { ClassModule } from './modules/class/class.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), StudentsModule, TeachersModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
