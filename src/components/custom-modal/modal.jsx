import React from "react";
import "./modal.css";
import { useForm } from "react-hook-form";
import myImage from "../../assets/registerform.jpg";

const Modal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((reesolve, reject) => {
      setTimeout(() => {
        reesolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    // await delay(2), // simulating netwrok delay
    // let r = await fetch("http://localhost:3000/", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();

    console.log(data, res);
    // if (data.username!=="chaku") {
    //   setError("myform",{message:"UserName Is Invalid"})
    // }
    // if(data.username==="dadu"){
    //   setError("blocked",{message:"You are Not allowed"})
    // }
  };
  return (
    <>
      {isSubmitting && <div>Loading....</div>}

      <div className="modal">
        <p onClick={onClose} >❌</p>

        <div id="loginform">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            style={{ background: `url(${myImage})` }}
          >C
            <div className="signInHead">
              <h1>Sign In</h1>
            </div>

            <div className="loginFromInputs">
              <div className="loginFromInputsContent" id="lower">
                <div>
                  <label htmlFor="name">Your Name:</label>
                </div>
                <div >
                  <input
                    placeholder="Enter Your UserName"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "This Field Is Required",
                      },
                      minLength: { value: 3, message: "Min-Length Is 3" },
                      maxLength: { value: 8, message: "Max-Length is 10" },
                    })}
                    type="text"
                  />
                  {errors.username && (
                    <div style={{ color: "red" }}>
                      {errors.username.message}
                    </div>
                  )}
                </div>
              </div>
              <br />

              <div className="loginFromInputsContent">
                <div>
                  <label htmlFor="email">Entre Your Email:</label>
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: { value: true, message: "Filed Required" },
                      minLength: { value: 5, message: "Min Length is 5" },
                    })}
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email.message}</div>
                  )}
                </div>
              </div>

              <div className="loginFromInputsContent">
                <div>
                  <label htmlFor="data">Entre Your Date Of Birth:</label>
                </div>
                <div>
                  <input
                    {...register("dob", {
                      required: { value: true, message: "Filed Required" },
                    })}
                    type="date"
                    name="data"
                    placeholder="Entre Your Date Of Birth"
                  />
                  {errors.date && (
                    <div style={{ color: "red" }}>{errors.date.message}</div>
                  )}
                </div>
              </div>

              <div className="loginFromInputsContent">
                <div>
                  <label htmlFor="password">Password:</label>
                </div>
                <div>
                  <input
                    {...register("password", {
                      required: { value: true, message: "Filed Required" },
                      minLength: { value: 5, message: "Min Length is 5" },
                      maxLength: { value: 10, message: "MaxLength is 10" },
                    })}
                    type="password"
                    name="password"
                    placeholder="At Least 6 Characters"
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="loginFromInputsContent">
                <div>
                  <label htmlFor="re-password">Re-Enter Password:</label>
                </div>
                <div>
                  <input
                    {...register("re-password", {
                      required: { value: true, message: "Filed Required" },
                      minLength: { value: 5, message: "Min Length is 5" },
                      maxLength: { value: 10, message: "MaxLength is 10" },
                    })}
                    type="password"
                    name="re-password"
                    placeholder="Entre the above password"
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <button disabled={isSubmitting} value="Submit">
                Register
              </button>
              {errors.myform && (
                <div className="red">{errors.myform.message}</div>
              )}
              {errors.blocked && (
                <div className="red">{errors.blocked.message}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
