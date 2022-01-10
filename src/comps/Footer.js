import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <div className="footer">
      <p>{props.text}</p>
    </div>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
