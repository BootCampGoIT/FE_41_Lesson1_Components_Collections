import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <ul className='list' style={{ display: "flex", listStyle: "none" }}>
          <li className='listItem' style={{ marginLeft: "10px" }}>
            Home
          </li>
          <li className='listItem' style={{ marginLeft: "10px" }}>
            About
          </li>
          <li className='listItem' style={{ marginLeft: "10px" }}>
            Contacts
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
