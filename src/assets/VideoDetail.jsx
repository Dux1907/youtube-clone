import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVideoDetail } from "./action";
import ReactPlayer from "react-player";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UploadIcon from '@mui/icons-material/Upload';
import { fetchRelatedVideo } from "./action";
import RelatedVideo from "./RelatedVideo";
// import { removeVideo } from "./action";
const VideoDetail = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.videos.videoDetail);
  //const products = useSelector((state) => state);
  // console.log(videoId);
  useEffect(() => {
    dispatch(
      fetchVideoDetail(videoId)
    );
    dispatch(
      fetchRelatedVideo(videoId)
    );
    // return () => {
    //     dispatch(removeVideo());
    //   };
  }, [videoId]);
  return (
    <>
       {Object.keys(product).length > 0 ? (
        <div className="container-fluid">
          <div className="row bg-dark text-white d-flex justify-content-start align-content-start">
            <div className="col-8 videoDetail">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                style={{ minHeight: "80vh", minWidth: "65vw" }}
              />
              <div className="row">
                <div className="col-10">
                  <p> {product.title}</p>
                  <h5>{product.channelTitle}</h5>
                </div>
                <div className="col-2 text-end">
                  <p>
                    <VisibilityIcon /> {product.viewCount}
                  </p>
                  <p>
                    <UploadIcon /> {product.uploadDate}
                  </p>
                </div>
              </div>
              {/* <Comments/> */}
            </div>
            <div className="col-4">
            <RelatedVideo />
            </div>
            
          </div>
        </div>
      ) : (
        <h3>Loading.....</h3>
      )} 
    </>
  );
};

export default VideoDetail;
