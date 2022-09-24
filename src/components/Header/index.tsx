import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="pt-2 pb-2">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/">
              <img className="logoImg" src={logo} alt="logo" />
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-secondary px-3 ms-3">
                Dashboard
              </button>
              <button
                type="button"
                className="btn btn-outline-success px-3 ms-2"
              >
                Попробовать создать
              </button>
            </Link>
          </div>
          <div>
            <button type="button" className="btn btn-outline-secondary px-3">
              Обратная связь
            </button>
            <button type="button" className="btn btn-secondary px-3 ms-2">
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
