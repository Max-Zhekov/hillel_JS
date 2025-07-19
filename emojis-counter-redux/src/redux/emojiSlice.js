import { createSlice } from "@reduxjs/toolkit";
import emojis from "../data";

const initialState = {
  counts:
    JSON.parse(localStorage.getItem("emojiCounts")) ||
    Array(emojis.length).fill(0),
  winner: null,
};

const emojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    vote(state, action) {
      state.counts[action.payload]++;
      localStorage.setItem("emojiCounts", JSON.stringify(state.counts));
    },
    showWinner(state) {
      const maxVotes = Math.max(...state.counts);
      if (maxVotes === 0) {
        state.winner = null;
        return;
      }
      const winnerIndex = state.counts.indexOf(maxVotes);
      state.winner = emojis[winnerIndex];
    },
    clear(state) {
      state.counts = Array(emojis.length).fill(0);
      state.winner = null;
      localStorage.removeItem("emojiCounts");
    },
  },
});

export const { vote, showWinner, clear } = emojiSlice.actions;
export default emojiSlice.reducer;
