import { useQuery } from "react-query";
import axios from "axios";
import { MOCK_DATA } from "../../etc/constants";

type usePostDetailProps = {
    id: number
};

function usePostList({ id }: usePostDetailProps) {
  const config = {
    params: {
      id
    }
  };

  return useQuery(["postDetail", id], async () => {
    // const { data } = await axios.get("/posts/", config);
    const [data] = MOCK_DATA.filter(item => item.id === id)
    return data;
  });
}

export default usePostList;
