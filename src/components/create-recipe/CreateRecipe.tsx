import { useState, FormEvent } from "react";
import { useCreateRecipeMutation, useGetRecipeByNameQuery } from "../../store/api/recipe.api";
import { IRecipeData } from "../../types/recipe.types";

import styles from "./CreateRecipe.module.css";

const initialState: IRecipeData = { name: "", image: "", description: "" };

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState<IRecipeData>(initialState);
  const [textareaRows, setTextareaRows] = useState(1);
  const [createRecipe] = useCreateRecipeMutation();

  const { data:existingRecipe, refetch} = useGetRecipeByNameQuery(recipe.name);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await refetch();
    if (existingRecipe) {
      alert("A recipe with this name already exists!");
      return
    }
    createRecipe(recipe).then(() => setRecipe(initialState));
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setRecipe({ ...recipe, description: value });

    // Calculate the number of rows based on the scroll height of the textarea
    const textareaLineHeight = 20; // Adjust this value based on your textarea's line-height
    const newRows = Math.floor(e.target.scrollHeight / textareaLineHeight);
    setTextareaRows(newRows > 1 ? newRows : 2); // Minimum of 2 rows to prevent collapsing
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>Create new recipe</p>
      <label>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
      </label>
      <label>
        <input
          className={styles.input}
          type="text"
          placeholder="Image"
          value={recipe.image}
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
        />
      </label>
      <label>
        <textarea
          className={styles.textarea}
          placeholder="Description"
          value={recipe.description}
          rows={textareaRows}
          onChange={handleTextareaChange}
        ></textarea>
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
