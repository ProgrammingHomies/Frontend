import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";

function OnboardingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: any) => {
    const data = {
      email,
      password
    };

    console.log(data);
    e.preventDefault();
  };

  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-row justify-center items-center'>
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
            onSubmit={onSubmit}></form>
        </motion.div>
      </div>
    </>
  );
}

export default OnboardingPage;
