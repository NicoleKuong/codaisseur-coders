import React from "react";
import { Link } from "react-router-dom";

export default class Developer extends React.Component {
  render() {
    const { name, email, id } = this.props.developer;

    return (
      <div>
        <Link to={`/read/${id}`}>
          <p>{name}</p>
          <p>{email}</p>
        </Link>
      </div>
    );
  }
}

//USE FUNCTION instead of CLASS (if we dont need to have component lifeCycle)
//always takes props as parameters

// import React from "react";

// const Developer = props => {
//   return (
//     <div>
//       <h2>{props.dev.name}</h2>
//       <h3>{props.dev.email}</h3>
//     </div>
//   );
// };

// export default Developer;
