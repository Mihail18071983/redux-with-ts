import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState:IRecipe[] = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, {payload:recipe}:PayloadAction<IRecipe>)=> {
      const isExists = state.some((r) => r.id === recipe.id);
      if (isExists) {
        const idx = state.findIndex((r) => r.id === recipe.id);
        if (idx !== -1) {
          state.splice(idx, 1);
        }
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { toggleFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer

