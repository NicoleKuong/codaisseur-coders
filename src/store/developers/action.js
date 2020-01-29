import api from "../../api";
// src/store/developers/actions.js

//action creator
export function developersFetched(data) {
  return {
    type: "developers/FETCHED",
    payload: data
  };
}
// console.log("action creator", developersFetched);

//thunk action- a function returns another function
export function fetchDevelopers(dispatch, getState) {
  api("/developers").then(data => {
    // note: just `dispatch` here now
    dispatch(developersFetched(data));
  });
}
// console.log("thunk action", fetchDevelopers);

// export function fetchDeveloperCreator() {
//   return (dispatch, getState) => {
//     api("/developers").then(data => {
//       // note: just `dispatch` here now
//       dispatch(developersFetched(data));
//     });
//   };
// }

// The redux-thunk middleware looks at the incoming action,
// and determines that it's not a normal (object) action.
// So, instead of passing it along (to the store's reducer),
// it calls the function and passes it the store's dispatch
// and getState methods as arguments.

//thunk action creator
// function fetchDeveloper(id) {
//   return (dispatch, getState) => {};
// }
