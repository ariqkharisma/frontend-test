import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsAPI from "./news-api";



export const fetchNewsHeadline = createAsyncThunk('news/headline', 
    async () => {
        try {
            const { data } = await newsAPI.getNewsHeadline();
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchNewsEverything = createAsyncThunk('news/everything', 
    async () => {
        try {
            const { data } = await newsAPI.getNewsEverything();
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchNewsCategory = createAsyncThunk('news/category', 
    async (params) => {
        try {
            const { data } = await newsAPI.getNewsCategory(params);
            return data;            
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {newsHeadline: [], newsEverything: [], newsCategory:[]};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: {
        [fetchNewsHeadline.fulfilled] : (state, action) => {
            state.newsHeadline = action.payload;
        },
        [fetchNewsHeadline.rejected] : (state, action) => {
            state.newsHeadline = [];
        },
        [fetchNewsEverything.fulfilled] : (state, action) => {
            state.newsEverything = action.payload;
        },
        [fetchNewsEverything.rejected] : (state, action) => {
            state.newsEverything = [];
        },
        [fetchNewsCategory.fulfilled] : (state, action) => {
            state.newsCategory = action.payload;
        },
        [fetchNewsCategory.rejected] : (state, action) => {
            state.newsCategory = [];
        }

    }
})


const { reducer } = newsSlice;
export default reducer;