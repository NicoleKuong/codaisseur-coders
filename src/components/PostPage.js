import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/action";
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    //post_id underscore means one
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }
  render() {
    // console.log("postpage props", this.props.posts.post.comments);

    const { post } = this.props.post;

    if (!post) {
      //early return
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {console.log("post11", this)}
          <h1>{post.title}</h1>
          <h3>{post.content}</h3>
          {/* <ReactMarkdown source={post.content} /> */}

          {this.props.post.comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  // console.log("postpagestate", reduxState);
  return {
    post: reduxState.post
  };
}
export default connect(mapStateToProps)(PostPage);
