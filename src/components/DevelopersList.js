// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import Developer from "./Developer";
import { fetchDevelopers } from "../store/developers/action";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    console.log("componentDidMount", this.props);
    // Do the data fetch...
    this.props.dispatch(fetchDevelopers);
  }

  render() {
    const loading = !this.props.devs;
    // console.log("develops", this.props.devs);

    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>
            {this.props.devs.rows.map((person, index) => (
              <Developer developer={person} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
