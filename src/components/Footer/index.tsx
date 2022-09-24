import React from "react";
import "./style.css";

const Header: React.FC = () => {
  return (
    <footer className="pt-2 pb-2">
      <div className="container text-center">
        Site design / logo © 2022 IRaccoonI Inc; user contributions licensed
        under <a href="">CC BY-SA</a>.
        <span id="svnrev"> rev&nbsp;2022.9.23.17768</span>
      </div>
    </footer>
  );
};

export default React.memo(Header);
