import React from "react";
import "./brand.css";

// import { google,slack,atlassian,dropbox,shofipy } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src="src\assets\google.png" alt="google" />
      </div>
      <div>
        <img src="src\assets\slack.png" alt="slack" />
      </div>
      <div>
        <img src="src\assets\atlassian.png" alt="atlassian" />
      </div>
      <div>
        <img src="src\assets\dropbox.png" alt="dropbox" />
      </div>
      <div>
        <img src="src\assets\shopify.png" alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
