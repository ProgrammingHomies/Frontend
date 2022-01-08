import { useQuery } from "react-query";
import axios from "axios";
import { MOCK_DATA } from "../../etc/constants";

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

export default usePostList;
