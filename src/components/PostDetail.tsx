import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
import LoadingPage from "../pages/LoadingPage";
import usePostDetail from "../services/api/usePostDetail";

function PostDetail() {
  const params = useParams();

  const { data, status, error } = usePostDetail({ id: Number(params.postId) });

  if (status === "loading") return <LoadingPage />;
  else if (status === "error")
    return <p>Error Occured {(error as Error).message}</p>;

  return (
    <motion.div
      className='flex flex-col w-full lg:w-3/4 h-full my-16 mx-auto bg-gray-300 dark:bg-gray-700 gap-y-2 py-6'
      key='landingPageTitle'
      transition={{
        type: "spring"
      }}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}>
      <div>
        <h2 className='font-bold text-xl md:text-2xl text-center text-black dark:text-white'>{data?.title}</h2>
      </div>
      <div className="px-2 indent-4 flex flex-col gap-y-2">
        {data?.bio.split(/\r?\n/).map(paragraph => {
          return <p key={uniqid()} className="text-black dark:text-white">{paragraph}</p>
        })}
      </div>
    </motion.div>
  );
}

export default PostDetail;
