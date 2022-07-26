import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = false;
    },
  },
});

export const { setLogin, setLogout } = auth.actions;
export default auth.reducer;
