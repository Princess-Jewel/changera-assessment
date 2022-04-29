import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
};
export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/user`,
        config
      );
      // console.log(data);
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
    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });
   
  },
});

export default reposSlices.reducer;
