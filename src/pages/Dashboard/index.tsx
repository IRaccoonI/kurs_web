import React from "react";
import DashboardItem from "../../components/Dashboard/DashboardItem";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h3 className="mt-2">Dashboard:</h3>
      <div className="row">
        {Array.from({ length: 100 })
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="col-6 col-md-3 col-lg-2 mb-2">
              <DashboardItem />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
