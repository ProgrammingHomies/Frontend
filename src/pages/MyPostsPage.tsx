import { motion } from "framer-motion/types/render/dom/motion";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import uniqid from "uniqid";
import Header from "../components/Header";
import usePostDetail from "../services/api/usePostDetail";
import LoadingPage from "./LoadingPage";




function MyPostsPage() {
    const navigate = useNavigate()
  
    return (
      <>
        <Header></Header>
        <div className='container h-full flex flex-col justify-center items-center'>
        
        </div>
      </>
    );
  }
  
  export default MyPostsPage;
  