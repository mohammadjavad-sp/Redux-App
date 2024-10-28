import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../key";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticlesStatus",
  async () => {
    const res = await axios.get(
      "https://api.jsonbin.io/v3/b/671d4cfaacd3cb34a89d7b0f",
      {
        headers: {
          "X-Master-Key": apiKey,
        },
      }
    );
    return res.data;
  }
);

export const fetchArticlesByCategory = createAsyncThunk(
  "articles/fetchArticlesByCategory",
  async () => {
    const res = await axios.get(
      "https://api.jsonbin.io/v3/b/671d4cfaacd3cb34a89d7b0f",
      {
        headers: {
          "X-Master-Key": apiKey,
        },
      }
    );
    return res.data;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState: { allArticles: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.allArticles = action.payload.record;
    });
    builder.addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
      state.allArticles = action.payload.record;
      if (action.meta.arg == "programming") {
        const result = state.allArticles.filter(
          (article) => article.category === "برنامه نویسی"
        );
        state.allArticles = result;
      } else if (action.meta.arg == "tech") {
        const result = state.allArticles.filter(
          (article) => article.category === "تکنولوژی"
        );
        state.allArticles = result;
      } else if (action.meta.arg == "social") {
        const result = state.allArticles.filter(
          (article) => article.category === "اجتماعی"
        );
        state.allArticles = result;
      }
    });
  },
  reducers: {
    articlesByWritter: (state, action) => {
      state.allArticles = action.payload;
    },
    articlesBySort: (state, action) => {
      if (action.payload == "newest") {
        state.allArticles = state.allArticles.reverse();
      } else if (action.payload == "oldest") {
        state.allArticles = state.allArticles.reverse();
      } else if (action.payload == "shortest") {
        state.allArticles = state.allArticles.sort(
          (a, b) => a.readingTime - b.readingTime
        );
      } else if (action.payload == "longest") {
        state.allArticles = state.allArticles.sort(
          (a, b) => b.readingTime - a.readingTime
        );
      }
    },
  },
});

export const { articlesByWritter, articlesBySort } = articlesSlice.actions;
