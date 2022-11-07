import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { authToken } from "../../../Utilities/authToken";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignin()
    .then(res => {
      const user = res.user;
      authToken(user);
      navigate(from, { replace: true });
    })
    .catch(err => {
        console.error(err);
    })
  }

  return (
    <div className="mb-5">
      <p className="text-center">
        <small>Social Login</small>
      </p>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost border border-gray-500">GOOGLE</button>
      </p>
    </div>
  );
};

export default SocialLogin;
