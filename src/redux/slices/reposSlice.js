
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const config = {
  headers: {
    Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
};

export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (user, { rejectWithValue, getState, dispatch }) => {
    
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=20`,
        config
      );
      console.log(data)
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
       
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const setDefaultList = createAsyncThunk(
  "default/list",
  async (data, { rejectWithValue, getState, dispatch }) => {
    return data
  }
);

export const handleSearchResultsRed = createAsyncThunk(
  "search/list",
  async (items, { rejectWithValue, getState, dispatch }) => {
    const filteredRepos = items.reposList.filter(repo =>
      repo.name.toLowerCase().includes(items.searchKey.toLowerCase().trim())
    );
    return filteredRepos;
  }
);


export const fetchProfileAction = createAsyncThunk(
  "profile/list",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/user`, config);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const reposSlices = createSlice({
  name: "repos",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(setDefaultList.fulfilled, (state, action) => {
      state.reposList = action?.payload;
    });

    builder.addCase(handleSearchResultsRed.fulfilled, (state, action) => {
      state.reposList = action?.payload;
    });

    
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });

    
    //Profile
    builder.addCase(fetchProfileAction.pending, (state, action) => {
      state.loading = true;
      state.profile = undefined;
    });
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.profile = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchProfileAction.rejected, (state, action) => {
      state.loading = false;

      state.profile = undefined;
      state.error = action.payload;
    });
  },
});

export default reposSlices.reducer;
