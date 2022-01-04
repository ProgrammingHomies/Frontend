import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";

function SignOut() {
  const { setUser } = useAuthStore();
  useEffect(() => {
    // @ts-ignore
    setUser(undefined);
  }, []);
  return <Navigate to='/' replace />;
}

export default SignOut;
