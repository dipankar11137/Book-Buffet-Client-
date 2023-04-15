import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import login from "../../Images/Login/login.jpg";

const CreateAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser) {
    navigate("/");
  }

  const createDBUser = (name, email) => {
    // fetch(`https://boxberry.onrender.com/create-user/${email}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  const onSubmit = (data) => {
    // console.log(data.email, data.password, data.name);
    createUserWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    createDBUser(data.name, data.email);
    toast.success("Updated profile");
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vp",
      }}
      className="flex justify-center h-screen bg-slate-700"
    >
      {/* <div className="w-4/12 pt-40">
        <img className="w-11/12 rounded-xl" src={login} alt="" />
      </div> */}
      <div className="flex h-screen justify-center items-center  ">
        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-psd/black-white-glow-dust-particle-abstract-background_35672-1431.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vp",
          }}
          className="card w-96 shadow-2xl bg-violet-200"
        >
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  style={{ width: "350px" }}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full   "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full   "
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full   "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small></small>
            </p>
            <div className="divider">OR</div>
            <p className="ml-2">Already Have An Account</p>

            <Link
              to="/login"
              className="btn btn-outline  bg-lime-500 text-black font-bold"
            >
              Please Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
