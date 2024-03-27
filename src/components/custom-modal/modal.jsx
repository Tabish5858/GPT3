import React from "react";
import "./modal.css";
import myImage from "../../assets/registerform.jpg";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <p onClick={onClose}>❌</p>

      <div id="loginform">
        <form action="" id="form" style={{ background: `url(${myImage})` }}>
          <div className="signInHead">
            <h1>Sign In</h1>
          </div>

          <div className="loginFromInputs">
            <div className="loginFromInputsContent">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="name"
                placeholder="First and Last name"
              />
            </div>

            <div className="loginFromInputsContent">
              <label htmlFor="email">Entre Your Email:</label>
              <input type="email" name="email" placeholder="Entre Your Email" />
            </div>
            <div className="loginFromInputsContent">
              <label htmlFor="data">Entre Your Date Of Birth:</label>
              <input
                type="date"
                name="data"
                placeholder="Entre Your Date Of Birth"
              />
            </div>

            <div className="loginFromInputsContent">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="password"
                placeholder="At Least 6 Characters"
              />
            </div>

            <div className="loginFromInputsContent">
              <label htmlFor="re-password">Re-Enter Password:</label>
              <input
                type="password"
                name="re-password"
                className="password"
                placeholder="Entre the above password"
              />
            </div>
            <button>Register</button>
          </div>

          {/* <div id="formbtn">
            {" "}
          </div> */}

          <div id="instructions">
            <div className="instructionsContent">
              {" "}
              By continuing,you agree to GPT3 <a href="">
                conditions of use
              </a>{" "}
              and <a href="">Privacy Notice</a>
            </div>
            <div className="instructionsContent">
              <a href="">Need Help?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
