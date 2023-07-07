export interface IRecipe {
  name: string;
  id: string;
  image: string;
  description: string;
}

export interface IRecipeData extends Omit<IRecipe, "id"> { }

export interface IRecipeID extends Pick<IRecipe, "id"> { }
