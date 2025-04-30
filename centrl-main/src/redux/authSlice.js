import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user_id: null,
    name: null,
    email: null,
    googleId: null,
    profileImage: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user_id = action.payload.user_id || action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.googleId = action.payload.googleId;
      state.profileImage = action.payload.profileImage;
    },
    logout: (state) => {
      state.token = null;
      state.user_id = null;
      state.name = null;
      state.email = null;
      state.googleId = null;
      state.profileImage = null;
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
