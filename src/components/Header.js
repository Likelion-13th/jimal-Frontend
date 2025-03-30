import { Link, useLocation } from "react-router-dom";
// Header.js
import React from 'react';
import "../styles/Header.css";

const Header = () => {
  const location = useLocation(); // 현재 경로 얻기
  const currentPage = location.pathname;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">LIKELION</div>
          <div className="menu">
            <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
              New
            </Link>
            <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>
              Diffuser
            </Link>
            <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}>
              Perfume
            </Link>
            <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
              Mypage
            </Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
