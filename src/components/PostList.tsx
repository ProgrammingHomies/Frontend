import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import usePostList from "../services/api/usePostList";
import LoadingPage from "../pages/LoadingPage";

function PostList() {
  const navigate = useNavigate();
  const { data, status, error } = usePostList();

  if (status === "loading") return <LoadingPage />;
  else if (status === "error")
    return <p>Error Occured {(error as Error).message}</p>;
    
  return (
    <motion.div
      className='flex flex-col w-full lg:w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 gap-y-2 py-6'
      key='landingPageTitle'
      transition={{
        type: "spring"
      }}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}>
      {data?.map((item: any) => {
        return (
          <div
            className='flex flex-row justify-between items-center px-2 lg:px-8'
            key={uniqid()}>
            <h3
              className='capitalize text-black dark:text-white font-semibold cursor-pointer text-md md:text-xl'
              onClick={() => {
                navigate(`/posts/${item.id}`);
              }}>
              {item.title}
            </h3>
            <div className='flex flex-row gap-x-2 justify-center items-center'>
              <h3 className='hidden lg:inline-flex text-black dark:text-white mr-4'>
                Last Update: {new Date(item.updatedAt).toLocaleString("tr-TR")}
              </h3>
              {item.tags.map((tag: any) => (
                <div
                  key={uniqid()}
                  className={`flex flex-row justify-center items-center h-10 w-24 text-center rounded-xl text-black dark:text-white bg-${tag.color}-400`}>
                  {tag.title}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default PostList;
