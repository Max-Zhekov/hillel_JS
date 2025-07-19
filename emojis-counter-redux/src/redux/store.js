import { configureStore } from "@reduxjs/toolkit";
import emojiReducer from "./emojiSlice";

const store = configureStore({
  reducer: {
    emoji: emojiReducer,
  },
});

export default store;
