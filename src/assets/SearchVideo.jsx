import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const SearchVideo = (val, key) => {
  return (
    <div
      key={key}
      className="col-11 text-white mt-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",float:'right'
      }}
    >
       <Link to={`/video/${val.val.videoId}`}>
          <div className="row">
         
                  <div className="col-12 d-flex ">
          <img
            src={val.val.thumbnail[0].url}
            alt={val.val.channelTitle}
            style={{ height: "200px", width: "275px" }}
                  />
                  <div className="d-flex flex-column ms-3 justify-content-center">
                      <h5>{val.val.title}</h5>
                      <div className="d-flex mb-2">
          <p className="me-2"><VisibilityIcon /> {val.val.viewCount}</p>
                          <p> <FiberManualRecordIcon style={{ fontSize: 'small',marginRight:'5px' }} />{val.val.publishedText}</p>
                          </div>
                      <h5>{val.val.channelTitle}</h5>
                      <p>{val.val.description}</p>
                      </div>
                  </div>
                  
        </div>
      </Link>
    </div>
  );
};

export default SearchVideo;
