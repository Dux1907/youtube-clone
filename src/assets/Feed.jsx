import { Sidebar } from "./pages";
import { Videos } from "./pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "./action";
const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-12 overflow-auto bg-dark text-white" style = {{maxHeight:'93vh',overflow:'scroll'}}>
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row bg-dark justify-content-center d-flex" style = {{maxHeight:'93vh',overflow:'scroll'}}>
            <Videos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
