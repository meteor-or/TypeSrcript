import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function nav() {
  return (
    <nav style={{ borderRight: "1px solid #fff45", height: "100%" }}>
      <ul style={{ listStyle: "square" }} className="vertical menu">
        <li>
          <Link to="unionAnyUnknown">union type, any, unknown</Link>
        </li>
        <li>
          <Link to="fucntion">function and Void</Link>
        </li>
        <li>
          <Link to="narrowing">Narrowing, Assertion</Link>
        </li>
        <li>
          <Link to="typeAlias">typeAlias</Link>
        </li>
        <li>
          <Link to="object">object, method</Link>
        </li>
      </ul>
    </nav>
  );
}

nav.propTypes = {};

export default nav;
