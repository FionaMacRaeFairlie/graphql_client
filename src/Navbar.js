import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>
          <a href="/" className="nav-item ">
            Home
          </a>
        </span>
        <span>
          <a href="/create-blog" className="nav-item ">
            Write post
          </a>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;