import { createSlice } from "@reduxjs/toolkit";

import { BlogItem } from "./types";
export interface blogStateType {
  blogs: BlogItem[];
  blogItem: BlogItem;
  isBlogsLoading: boolean;
  error: any;
}

const intialState: blogStateType = {
  blogs: [],
  blogItem: {
    id: -1,
    title: "",
    date: "",
    description: "",
    image: "",
    slug: "",
    content: "",
    showinportfolio: true,
  },
  isBlogsLoading: true,
  error: null,
};

export const blogSlice: any = createSlice({
  name: "blog",
  initialState: intialState,
  reducers: {
    getBlogs: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isBlogsLoading = true;
    },
    getBlogsSuccess: (state, action) => {
      state.isBlogsLoading = false;
      state.blogs = action.payload;
    },
    getBlogsFailed: (state, action) => {
      state.isBlogsLoading = false;
      state.error = action.payload;
    },

    getBlogItem: (state) => {
      state.isBlogsLoading = true;
    },
    getBlogItemSuccess: (state, action) => {
      state.isBlogsLoading = false;
      state.blogItem = action.payload;
    },
    getBlogItemFailed: (state, action) => {
      state.isBlogsLoading = false;
      state.error = action.payload;
    },
    addBlog: (state) => {
      state.isBlogsLoading = false;
    },
    addBlogSuccess: (state) => {
      state.isBlogsLoading = false;
    },
    addBlogFailed: (state, action) => {
      state.isBlogsLoading = false;
      state.error = action.payload;
    },
    editBlogItem: (state) => {
      state.isBlogsLoading = true;
    },
    editBlogItemSuccess: (state) => {
      state.isBlogsLoading = false;
    },
    editBlogItemFailed: (state, action) => {
      state.isBlogsLoading = false;
      state.error = action.payload;
    },
    deleteBlogItem: (state) => {
      state.isBlogsLoading = true;
    },
    deleteBlogItemSuccess: (state) => {
      state.isBlogsLoading = false;
    },
    deleteBlogItemFailed: (state, action) => {
      state.isBlogsLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getBlogs,
  getBlogsSuccess,
  getBlogsFailed,
  getBlogItem,
  getBlogItemSuccess,
  getBlogItemFailed,
  editBlogItem,
  editBlogItemSuccess,
  editBlogItemFailed,
  deleteBlogItem,
  deleteBlogItemSuccess,
  deleteBlogItemFailed,
  addBlog,
  addBlogFailed,
  addBlogSuccess,
} = blogSlice.actions;
