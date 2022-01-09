import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {MOCK_DATA} from "../../etc/constants";

function MyPostsPage() {
    const navigate = useNavigate()
  
    return (
      <>
        <Header></Header>
        <div className='container h-full flex flex-col justify-center items-center'>
        type usePostListProps = {
  page?: number;
  search?: string;
  order?: string;
};

function usePostList({ page, search, order }: usePostListProps = {}) {
  const config = {
    params: {
      page,
      search,
      order
    }
  };

  return useQuery(["postList", page, search, order], async () => {
    // const { data } = await axios.get("/posts/", config);
    return MOCK_DATA;
  });
}

        </div>
      </>
    );
  }
  
  export default MyPostsPage;
  