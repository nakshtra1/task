import React from "react";
import InnerContain from "./InnerContain";

function Header() {
  return (
    <div className="container">
      <nav class="navbar bg-white">
        <div class="container-fluid justify-content-center ">
          <a class="navbar-brand p-3" href="#">
          <h2>Logo</h2>
          </a>
        </div>
      </nav>
      <InnerContain/>
    </div>
  );
}

export default Header;
