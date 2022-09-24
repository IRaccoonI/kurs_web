import React from "react";
import { Link } from "react-router-dom";
import NoPhoto from "../../NoPhoto";
import "./style.css";

const DashboardItem: React.FC<{ className?: string }> = ({ className }) => {
  const titleText = "Lorem, ipsum dolor sit. aliquam?";

  const descriptionText =
    "Lorem, mollitia quidem dolor dolores est praesentium. Aliquam, ab labore.";

  return (
    <Link to="/item" className="text-decoration-none">
      <div className="dashboardItemContainer">
        <NoPhoto className={`${className} dashboardItemImgContainer`} />
        <div className="w-100 fw-600 text-truncate">{titleText}</div>
        <div className="w-100 two-ellipsis small-text">{descriptionText}</div>
        <div className="dashboardItemHoverContent py-1 px-2">
          <div className="fw-600">{titleText}</div>
          <div className="small-text">{descriptionText}</div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(DashboardItem);
