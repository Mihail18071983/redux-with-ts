import { useFavorites } from "../../hooks/useFavorites";
import { useActions } from "../../hooks/useActions";
import styles from "./Recipe.module.css";
import { IRecipe } from "../../types/recipe.types";

interface IRecipeItem {
  recipe: IRecipe;
}
// eslint-disable-next-line react/prop-types
export const RecipeItem = ({ recipe }: IRecipeItem) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();
  // eslint-disable-next-line react/prop-types
  const isExist = favorites?.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h3>{recipe?.name}</h3>
      <div className={styles.wrapper}>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
      </div>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? `Remove from` : `Add to`} favorites
      </button>
    </div>
  );
};
