interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {
  execute({ name, description }: IResquest) {
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists !!!');
    }

    categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryService };
