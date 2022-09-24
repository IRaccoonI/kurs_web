import React from "react";
import "./style.css";

const NoPhoto: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`${className} noPhotoImg`}>{children}</div>;
};

export default React.memo(NoPhoto);
