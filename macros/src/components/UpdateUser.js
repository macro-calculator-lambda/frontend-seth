import React from "react";

class UpdateUser extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Update Macros or Weight</h2>
        <form>
          <input type="text" />
          <input type="text" />
          <button>Update Macros</button>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
