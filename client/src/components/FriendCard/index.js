import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="pink segment ui">
    <img alt={props.creatureName} src={require('../../assets/images/' + props.imageType)} className="ui small top aligned image"/>
    <ul>
      <li>
        Caught by friend: {props.email}
      </li>
      <li>
        Animal's Name: {props.creatureName}
      </li>
    </ul>
    </div>
  );
}

export default FriendCard;
