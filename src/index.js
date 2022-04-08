import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  getBugsByUser,
} from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 2 }));
store.dispatch(bugAdded({ description: "Bug 4" }));
store.dispatch(bugResolved({ id: 1 }));

console.log(getBugsByUser(2)(store.getState()));
