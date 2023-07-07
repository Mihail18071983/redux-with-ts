import { IRecipeData, IRecipeID} from "../../types/recipe.types";
import { api } from "./api";



export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation<null, IRecipeData>({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type:"Recipe"
            }]
        }),
        deleteRecipeById: builder.mutation<null, IRecipeID>({
            query: (recipeId) => ({
                url: `/${recipeId}`,
                method: 'DELETE',
            }),
        }),
        getRecipeByName: builder.query<IRecipeData, string>({
            query: (name) => `/${name}`,
        }),
    }),
});


export const {useCreateRecipeMutation, useGetRecipeByNameQuery}=recipeApi
