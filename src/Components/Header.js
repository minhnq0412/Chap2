import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      window.scrollY > 100
        ? header.classList.add("fixed")
        : header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, []);

  return (
    <div
      style={{ padding: "20px", background: "black", width: "100%" }}
      id="header"
    ></div>
  );
};

export default Header;
