import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import React from 'react'

function Links() {
  return (
    <div>
        <h3>Links</h3>
        <a href="{props.github}">https://github.com/liza</a>
    <a href="{props.linkedin}">https://www.linkedin.com/in/liza/</a>
    
    </div>

  )
}

export default Links
ReactDOM.render(<App />, document.getElementById("root"));
