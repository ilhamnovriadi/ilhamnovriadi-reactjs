import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
