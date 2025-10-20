import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, profileUpdate } = use(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

   

    createUser(email, password)
      .then((result) => {
        const user = result.user;
       
        profileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo});
            navigate("/")
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

   
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo URL"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <h2 className="text-center mt-3">
              Already Have An Account ?{" "}
              <Link className="text-red-500 font-semibold" to="/auth/login">
                Login
              </Link>{" "}
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
