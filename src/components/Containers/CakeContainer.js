import React from "react";
import { buyCake, addCake } from "../../redux/Actions/cakeAction";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> No. of Cakes -{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <br /> <br />
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
