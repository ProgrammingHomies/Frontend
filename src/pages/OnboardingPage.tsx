import Select from "react-select";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "react", label: "React" },
  { value: "typescript", label: "Typescript" },
  { value: "javascript", label: "Javascript" }
];

function OnboardingPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [github, setGithub] = useState("");
  const [linkendin, setLinkendin] = useState("");
  const [bio, setBio] = useState("");

  const onSubmit = (e: any) => {
    const data = {
      nickname,
      birthday,
      github,
      linkendin,
      bio
    };

    console.log(data);
    navigate("/dashboard");
    e.preventDefault();
  };

  // TODO Select needs component styling.

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
            className='h-full w-full flex flex-row flex-wrap gap-4 justify-between items-center'
            action='#'
            method='POST'
            onSubmit={onSubmit}>
            <div className='flex flex-col gap-4 flex-1'>
              <label className='hidden'>Full Name</label>
              <input
                id='nickname'
                type='text'
                className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
                placeholder='Your Nickname'
                autoComplete='off'
                value={nickname}
                onChange={e => {
                  setNickname(e.target.value);
                }}></input>
              <label className='hidden'>Birthday</label>
              <input
                id='birthday'
                type='date'
                className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
                autoComplete='off'
                value={birthday}
                onChange={e => {
                  setBirthday(e.target.value);
                }}></input>
            </div>
            <div className='flex flex-col gap-4 flex-1'>
              <label className='hidden'>Github</label>
              <input
                id='github'
                type='text'
                className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
                placeholder='Github Account'
                autoComplete='off'
                value={github}
                onChange={e => {
                  setGithub(e.target.value);
                }}></input>
              <label className='hidden'>Linkendin</label>
              <input
                id='linkendin'
                type='text'
                className='px-4 py-3 rounded dark:bg-gray-700 dark:text-white'
                placeholder='Linkendin Account'
                autoComplete='off'
                value={linkendin}
                onChange={e => {
                  setLinkendin(e.target.value);
                }}></input>
            </div>
            <div className='w-full'>
              <textarea
                className='w-full h-60 rounded dark:bg-gray-700 dark:text-white resize-none'
                placeholder='Bio'
                autoComplete='off'
                value={bio}
                onChange={e => {
                  setBio(e.target.value);
                }}></textarea>
            </div>
            <div className='w-full'>
              <Select
                options={options}
                isMulti={true}
                className='onboarding-select'
              />
            </div>
            <div className='w-full'>
              <input
                type='submit'
                className='mt-4 w-full py-4 rounded bg-gray-200 text-gray-600 hover:opacity-50 transition-all dark:bg-gray-700 dark:text-white cursor-pointer'
                value='Sign Up'></input>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default OnboardingPage;
