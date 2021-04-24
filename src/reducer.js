import { combineReducers } from "redux";
import userInfoReducer from "./pages/HomePage/UserSlice";

export default combineReducers({ userInfo: userInfoReducer });
