import { Sidebar } from "./pages";
import { Videos } from "./pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "./action";
const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos(`search?q=music&part=snippet%2Cid`));
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-12 overflow-auto gap-3 d-flex flex-md-column bg-dark text-white gap-md-1 text-center">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row bg-dark justify-content-center d-flex">
            <Videos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
