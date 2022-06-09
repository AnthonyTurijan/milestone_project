import { useState, useEffect } from "react";
import SignupValidation from "./SignupValidation";
import env from "react-dotenv";
import bcrypt from "bcryptjs";

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(14);
// example =>  $2a$10$CwTycUXfafhfdhq9StjUM0u => to be added always to the password hash

function SignupForm({submitForm}) {
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
 

  const [signup, setSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    dateofBirth: "",
    passwordComfirmation: "",
    salt: salt,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(SignupValidation(signup));
    setDataIsCorrect(true);
  };

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ signup })
};

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      signup.password = bcrypt.hashSync(signup.password, salt)
      fetch(`/users`, requestOptions)
      .then(response => response.json())
      //.then(data => this.setState({ totalReactPackages: data.total }));
      submitForm(true);
    }
  }, [errors])

  return (
    <>
    <h1>Signup form</h1>
      <div
        style={{
          padding: ".5rem",
          display: "flex",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <form>
          <div className="form-group">
          <label className="label" htmlFor="email">Email: </label>
          <input
            style={{ padding: ".25rem", borderRadius: "10px" }}
            name="email"
            value={signup.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            autoComplete="email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
          <label className="label" htmlFor="firstName">First Name: </label>
          <input
            style={{ padding: ".25rem", borderRadius: "10px" }}
            name="firstName"
            value={signup.firstName}
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            autoComplete="First Name"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
          <label className="label" htmlFor="lastName">Last Name: </label>
          <input
            style={{ padding: ".25rem", borderRadius: "10px" }}
            name="lastName"
            value={signup.lastName}
            type="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            autoComplete="Last Name"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
          <label className="label" htmlFor="password">Password: </label>
          <input
            style={{ padding: ".25rem", borderRadius: "10px" }}
            name="password"
            value={signup.password}
            type="password"
            onChange={handleChange}
            placeholder="Password"
            autoComplete="current-password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
          <label className="label" htmlFor="password">Comfirmation: </label>
          <input
            style={{ padding: ".25rem", borderRadius: "10px" }}
            name="passwordComfirmation"
            value={signup.passwordComfirmation}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.passwordComfirmation && <p className="error">{errors.passwordComfirmation }</p>}
          </div>
          <div className="form-group">
          <label className="label" htmlFor="dateofBirth">
            Date of Birth:{" "}
          </label>
          <input
            name="dateofBirth"
            value={signup.dateofBirth}
            onChange={handleChange}
            style={{ padding: ".25rem", borderRadius: "10px" }}
            type="date"
          />
          {errors.dateofBirth && <p className="error">{errors.dateofBirth}</p>}
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            style={{
              padding: ".25rem",
              borderRadius: "10px",
              margin: ".25rem",
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
