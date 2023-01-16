import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const Links = (
    <div onClick={() => setOpen((prev) => !prev)}>
      <Link className="link" to="/"> Chat </Link>
      <Link className="link" to="/register"> Register </Link>
      <Link className="link" to="/login"> LogIn </Link>{" "}
    </div>
  );
  return (
    <div className="menu">
      {open ? (
        Links
      ) : (
        <FaBars onClick={() => setOpen((prev) => !prev)} className="icon" />
      )}
    </div>
  );
}
