import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions/index"


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.addFeature()}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car
  }
}

const mapDispatchToProps = {
  addFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
