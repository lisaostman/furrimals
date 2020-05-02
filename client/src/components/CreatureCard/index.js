import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="img-container">
          <img alt={props.creatureName} src={require('../../assets/images/' + props.imageType)} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.creatureName}
            </li>
            <li>
              <strong>Type:</strong> {props.type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
