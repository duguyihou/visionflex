import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    firstName: "user",
    lastName: "name",
    dob: "04/23/2021",
    gender: "male",
    avatarUrl: null,
  },
  reducers: {
    updatePhoto(state, action) {
      return { ...state, avatarUrl: action.payload };
    },
  },
});

const { actions, reducer } = userInfoSlice;
export const { updatePhoto } = actions;
export default reducer;
