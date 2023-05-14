import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import SearchVideo from "./SearchVideo";
import ChannelId from "./ChannelId";
const SearchDetail = () => {
  const product5 = useSelector((state) => state.videos.videos);
  const component = (val, key) => {
    // console.log(val)
    if (val.type == "video") return <SearchVideo key={key} val={val} />;
    else return <ChannelId key={key} val={val} />;
  };
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-2 col-12 text-white bg-dark" style = {{maxHeight:'93vh',overflow:'scroll'}}>
          <Sidebar />
        </div>
        {
                  <>
                      <div className="col-md-10 col-12" style = {{maxHeight:'93vh',overflow:'scroll'}}>
                          <div className="row">
            {product5 && Object.keys(product5).length > 0 ? (
              product5.data.map((val, key) => {
                  return (
                          component(val, key)
                  )
                 
              })
            ) : (
              <h3>Loading...</h3>
                              )}
                              </div>
                          </div>
            </>
        }
      </div>
    </div>
  );
};

export default SearchDetail;
