import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { HeaderLinkType, HEADER_LINKS } from "../etc/constants";
import useAuthStore from "../stores/AuthStore";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState<Array<HeaderLinkType>>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLinks(HEADER_LINKS.filter(item => item.shouldUserSee === true));
    } else {
      setLinks(HEADER_LINKS.filter(item => item.shouldGuestSee === true));
    }
  }, []);

  return (
    <>
      <div className='flex flex-row justify-between items-center w-full h-12 px-4 bg-gray-200 dark:bg-gray-700 min-h-[3rem]'>
        <motion.h1
          className='text-black dark:text-white font-extrabold text-xl cursor-default'
          whileHover={{ scale: 1.2 }}>
          <span
            className='cursor-pointer hidden md:inline-flex'
            onClick={() => navigate("/")}>
            ProgrammingHomies
          </span>
          <span
            className='cursor-pointer inline-flex md:hidden'
            onClick={() => navigate("/")}>
            PH
          </span>
          {location.pathname !== "/" && (
            <span className='font-light tracking-tighter cursor-pointer' onClick={() => navigate(-1)}>
              {location.pathname}
            </span>
          )}
        </motion.h1>
        {user && location.pathname !== "/onboarding" && (
          <span className='font-light tracking-tighter text-black dark:text-white'>
            Auth User: {user?.nickname}
          </span>
        )}
        <div className='flex flex-row space-x-4'>
          <ThemeToggle />
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 stroke-black dark:stroke-white cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setIsOpen(state => !state);
            }}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </motion.svg>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='hamburgerMenu'
            transition={{
              duration: 0.25
            }}
            initial={{ opacity: 0, translateY: 45, right: 0 }}
            animate={{ opacity: 1, translateY: 45, right: 0 }}
            exit={{ opacity: 0, translateY: 45, right: 0 }}
            className={
              "absolute w-full md:w-1/3 flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700"
            }>
            {links.map((route, index) => {
              if (index === links.length - 1) {
                return (
                  <Link
                    key={uniqid()}
                    to={route.to}
                    className='w-full border-y-2 md:border-x-2 border-y-gray-300 md:border-x-gray-300 dark:border-y-gray-600 md:dark:border-x-gray-600 text-center py-1 text-black dark:text-white'>
                    {route.label}
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={uniqid()}
                    to={route.to}
                    className='w-full border-t-2 md:border-x-2 border-t-gray-300 md:border-x-gray-300 dark:border-t-gray-600 md:dark:border-x-gray-600 text-center py-1 text-black dark:text-white'>
                    {route.label}
                  </Link>
                );
              }
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
