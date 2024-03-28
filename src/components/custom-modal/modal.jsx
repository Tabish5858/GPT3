import React, { useEffect } from "react";
import "./modal.css";
import { useForm } from "react-hook-form";
import myImage from "../../assets/registerform.jpg";

const Modal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
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
    console.log(data); // Log the form data to the console

    // Ensure that `data` only contains simple data types before stringifying it
    const safeData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => typeof value !== "object")
    );

    await delay(1); // simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(safeData), // Use `safeData` instead of `data`
    });
    let res = await r.text();

    console.log(res, safeData); // Log `safeData` and the response to the console
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}

      <div className="modal">
        <p onClick={onClose}>❌</p>

        <div id="loginform">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            style={{
              background: `url(${myImage}) no-repeat center center/cover`,
            }}
          >
            C
            <div className="signInHead">
              <h1>Sign In</h1>
            </div>
            <div className="loginFromInputs">
              <div className="loginFromInputsContent" id="lower">
                <div>
                  <label htmlFor="name">Your Name:</label>
                </div>
                <div>
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
                  <label htmlFor="dob">Enter Your Date Of Birth:</label>
                </div>
                <div>
                  <input
                    {...register("dob", {
                      required: { value: true, message: "Field Required" },
                    })}
                    type="date"
                    name="dob"
                    placeholder="Enter Your Date Of Birth"
                  />
                  {errors.dob && (
                    <div style={{ color: "red" }}>{errors.dob.message}</div>
                  )}
                </div>
              </div>

              <div className="loginFromInputsContent">
                <div>
                  <label htmlFor="age">Age:</label>
                </div>
                <div>
                  <input
                    {...register("age", {
                      required: { value: true, message: "Field Required" },
                      min: { value: 18, message: "Minimum age is 18" },
                      max: { value: 70, message: "Maximum age is 70" },
                    })}
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                  />
                  {errors.age && (
                    <div style={{ color: "red" }}>{errors.age.message}</div>
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
                    placeholder="Entre Your password"
                  />
                  {errors.confirmPassword && (
                    <div style={{ color: "red" }}>
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <button disabled={isSubmitting} type="submit" value="Submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
