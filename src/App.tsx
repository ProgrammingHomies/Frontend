import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
      <motion.div
        drag={true}
        dragConstraints={{ left: -100, right: 100, top:0, bottom:0 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.35 },
        }}
        whileTap={{ scale: 0.9, transition: { duration: 0.25 } }}
      >
        <h1 className="text-3xl font-bold text-white ">Programming Homies! 👨🏻‍💻👩🏽‍💻</h1>
      </motion.div>
    </div>
  );
}

export default App;
