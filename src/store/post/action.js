// src/store/post/actions.js
import api from "../../api";

export function setPost(post) {
  return {
    type: "post/FETCHED",
    payload: post
  };
}

export function setComment(comments) {
  return {
    type: "post/COMMENTS_FETCHED",
    payload: comments.rows
  };
}

export function fetchPost(id) {
  //thunk action creator
  return function thunk(dispatch, getState) {
    console.log("id", id);
    // console.log("getStateinThunk", getState());
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });

    api(`/posts/${id}/comments`).then(comments => {
      dispatch(setComment(comments));
    });
  };
}

//use thunk when you fetch data from an API
