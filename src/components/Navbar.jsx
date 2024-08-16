import {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {AuthContext} from "../AuthProvider";
import {FcGoogle} from "react-icons/fc";

export default function Navbar() {
  const {user, logIn, errorMessage, googleLogIn} = useContext(AuthContext);
  const [showpass, setShowpass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password);
  };
  return (
    <>
      <div className="px-2 bg-black navbar md:px-6 lg:px-24">
        <div className="flex-1">
          <a className="text-xl font-medium text-white btn btn-ghost">
            MerchMart
          </a>
        </div>
        <div className="flex-none mr-2">
          <button
            className="text-black btn btn-sm"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Login
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="mr-4 modal-box">
              <form onSubmit={handleLogin} className="p-4">
                <caption className="text-2xl font-bold text-primary">
                  Login
                </caption>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    name="email"
                    className="rounded-xs input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      type={showpass ? "text" : "password"}
                      placeholder="password"
                      name="password"
                      className="w-full rounded-xs input input-bordered"
                      required
                    />
                    <span
                      onClick={() => setShowpass(!showpass)}
                      className="absolute text-xl right-12"
                    >
                      {showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                  </div>

                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Don&#39;t have an account?
                      <span className="text-blue-600 underline"> Register</span>
                    </a>
                  </label>
                </div>

                <div className="mt-2 form-control">
                  <button className="font-bold hover:text-primary bg-primary rounded-xs btn text-gray-950 ">
                    Login
                  </button>
                </div>
                <div className="divider">OR</div>
                <div className="flex items-center justify-center w-full">
                  <a
                    onClick={googleLogIn}
                    className="border btn hover:border-primary border-slate-400 rounded-3xl"
                  >
                    <FcGoogle className="text-3xl" />
                    Sign in with Google
                  </a>
                </div>
                {errorMessage ? (
                  <h3 className="text-red-600">{errorMessage}</h3>
                ) : (
                  ""
                )}
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}
