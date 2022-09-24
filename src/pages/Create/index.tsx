import React from "react";
import "./style.css";
import unityJpg from "../../assets/unity.jpg";

const Create = () => {
  return (
    <div
      className="w-100 h-100 createImg"
      style={{ backgroundImage: `url(${unityJpg})` }}
    ></div>
  );
};

export default React.memo(Create);
