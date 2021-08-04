import React from "react";


function Footer(props) {
  let footerStyle = {
    marginTop: "3rem",
    paddingBottom: "1rem",
    textAlign: "center",
  };
  return (
    <div className="footer" style={footerStyle}>
      {props.text}  
    </div>
  );
}

export default Footer;