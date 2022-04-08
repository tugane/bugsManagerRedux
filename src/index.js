// import { bugAdded, bugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());
