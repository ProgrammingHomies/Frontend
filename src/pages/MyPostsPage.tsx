import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import {MOCK_DATA} from "../../etc/constants";

function MyPostsPage() {
    const navigate = useNavigate()
  
    return (
      <>
        <Header></Header>
        <div className='container h-full flex flex-col justify-center items-center'>
          TEST
        </div>
      </>
    );
  }
  
  export default MyPostsPage;
  