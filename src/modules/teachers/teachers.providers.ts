import { Teacher } from './teacher.entity';
import { TEACHER_REPOSITORY } from '../../core/constants';


export const teachersProviders = [{
    provide: TEACHER_REPOSITORY,
    useValue: Teacher,
}];