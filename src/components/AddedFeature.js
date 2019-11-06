import React from 'react';
import {connect} from "react-redux";
import {removeAddedFeature} from "../actions/index"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={props.removeAddedFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state){
  return {
    car: state.car
  }
}

const mapDispatchToProps = {
  removeAddedFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
