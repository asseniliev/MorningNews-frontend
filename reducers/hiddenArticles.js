import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    addHiddenArticle: (state, action) => {
      console.log("Article hidden: " + action.payload.title);
      state.value.push(action.payload);
    },
    removeHiddenArticle: (state, action) => {
      state.value = state.value.filter(
        (hiddenArt) => hiddenArt.title !== action.payload.title
      );
    },
    clearListOfHiddenArticles: (state) => {
      state.value = [];
    },
  },
});

export const {
  addHiddenArticle,
  removeHiddenArticle,
  clearListOfHiddenArticles,
} = hiddenArticlesSlice.actions;

export default hiddenArticlesSlice.reducer;
