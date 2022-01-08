import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function PostsPage() {
  const navigate = useNavigate()

  return (
    <>
      <Header></Header>
      <div className='container h-full flex flex-col justify-center items-center'>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default PostsPage;
