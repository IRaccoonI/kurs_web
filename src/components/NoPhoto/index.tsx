import React from "react";
import noPhoto from "../../assets/noPhoto.png";
import "./style.css";

const NoPhoto: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div
      className={`${className} noPhotoImg`}
      style={{ backgroundImage: `url(${noPhoto})` }}
    >
      {children}
    </div>
  );
};

export default React.memo(NoPhoto);
