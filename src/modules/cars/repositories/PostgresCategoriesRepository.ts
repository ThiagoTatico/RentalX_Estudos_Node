import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    throw new Error(name);
  }
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error(description, name);
  }
}

export { PostgresCategoriesRepository };
