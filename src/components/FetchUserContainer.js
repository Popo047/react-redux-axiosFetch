import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/Actions/userAction";

function FetchUserContainer({ userData }) {
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData.users.map((users) => (
          <ul key={users.id}>
            <p>
              Name {users.name} <br /> Email: {users.email}
            </p>
          </ul>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchUserContainer);
