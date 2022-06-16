import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportedCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportedCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportedCategory[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        });
    });
  }

  execute(file: Express.Multer.File) {

  }
}

export { ImportCategoryUseCase };
