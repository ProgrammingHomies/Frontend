import { motion } from "framer-motion";
import Code from "../components/Code/Code";
import Header from "../components/Header";

const LANDING_PAGE_CODE = `function LandingPage() {
  return (
    <>
      <Header></Header>
        <motion.div
          className='container h-full flex flex-col justify-center items-center w-3/4 mx-auto'
          key='landingPageTitle'
          transition={{
            type: "spring"
          }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}>
          <Code code={LANDING_PAGE_CODE} language={"js"}></Code>
          </motion.div>
    </>
  );
}`

function LandingPage() {
  return (
    <>
      <Header></Header>
        <motion.div
          className='container h-full flex flex-col justify-center items-center w-full md:w-3/4 mx-auto'
          key='landingPageTitle'
          transition={{
            type: "spring"
          }}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}>
          <Code code={LANDING_PAGE_CODE} language={"js"}></Code>
          </motion.div>
    </>
  );
}

export default LandingPage;
