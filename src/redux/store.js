import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    modal: modalReducer,
  },
});
