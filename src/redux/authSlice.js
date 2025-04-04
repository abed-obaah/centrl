import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isAuthenticated: false,
  token: null,
  user_id: null,
  name: null,
  email: null,
  googleId: null,
  profileImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.googleId = action.payload.googleId;
      state.profileImage = action.payload.profileImage;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

// Persist Config
const persistConfig = {
  key: "auth",
  storage,
};

export default persistReducer(persistConfig, authSlice.reducer);
