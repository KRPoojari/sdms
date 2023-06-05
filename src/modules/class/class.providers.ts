import { Class } from './class.entity';
import { CLASS_REPOSITORY } from '../../core/constants';

export const classProviders = [{
    provide: CLASS_REPOSITORY,
    useValue: Class,
}];