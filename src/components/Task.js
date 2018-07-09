import React from "react";
import { connect } from "react-redux";
import { moveLeft, moveRight } from "../actions";
const Task = props => {
  return (
    <div className="Board__Column_Task">
      <p
        onClick={() => {
          props.moveLeft(props.text);
        }}
      >
        {" "}
        &larr;
      </p>
      {props.text}
      <p
        onClick={() => {
          props.moveRight(props.text);
        }}
      >
        {" "}
        &rarr;
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { moveLeft, moveRight }
)(Task);
