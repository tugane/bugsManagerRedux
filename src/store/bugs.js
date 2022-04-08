import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
// Reducer
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // action => action handlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id == bugId);
      bugs[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      bugs = bugs.filter((bug) => bug !== action.payload.id);
    },
  },
});

export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } =
  slice.actions;

export default slice.reducer;

// Memoinzation
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId == userId)
  );
