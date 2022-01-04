import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useAuthStore from "../stores/AuthStore";

function SignUpPage() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    setUser({
      email,
      nickname: undefined,
      birthday: undefined,
      links: undefined,
      bio: undefined
    });
    navigate("/onboarding", { replace: true });
    e.preventDefault();
  };

  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-row justify-center items-center'>
        <div className='hidden lg:flex lg:w-1/2 items-center justify-center'>
          <h1 className='text-center'>SignUp Image</h1>
        </div>
        <motion.div
          className='flex flex-col w-3/4 lg:w-1/2 mx-auto lg:mx-0'
          key='landingPageTitle'
          transition={{
            type: "spring"
          }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}>
          <form
            className='h-full w-full flex flex-col gap-4'
            action='#'
            method='POST'
            onSubmit={onSubmit}>
            <label htmlFor='email' className='hidden'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
              placeholder='Email'
              autoComplete='off'
              value={email}
              required
              onChange={e => {
                setEmail(e.target.value);
              }}></input>
            <label htmlFor='password' className='hidden'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
              placeholder='Password'
              autoComplete='off'
              value={password}
              required
              onChange={e => {
                setPassword(e.target.value);
              }}></input>
            <input
              type='submit'
              className='mt-4 px-4 py-3 rounded bg-gray-200 text-gray-600 hover:opacity-50 transition-all dark:bg-gray-700 dark:text-white cursor-pointer'
              value='Sign Up'></input>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default SignUpPage;
