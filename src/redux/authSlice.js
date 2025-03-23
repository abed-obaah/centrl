import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    name: null,
    email: null,
    googleId: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.googleId = action.payload.googleId;
    },
    logout: (state) => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.googleId = null;
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
