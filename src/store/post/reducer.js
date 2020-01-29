const initialState = {
  post: null,
  //null means either exist or not exist
  comments: []
  // there is always going to be a list
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/FETCHED": {
      // => Ask yourself: what is action.payload?
      console.log("reducer", action.payload);
      return {
        ...state,
        post: action.payload
      };
    }

    //in this app, you need fetch the post first to get the id. The order matter
    case "post/COMMENTS_FETCHED": {
      return {
        ...state,
        comments: [...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
