import { useDispatch } from "react-redux";
import { fetchVideos } from "./action";
import "../index.css";
const Sidebar = () => {
  const dispatch = useDispatch();
  const genre = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1946/1946485.png",
      content: "Trending",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
      content: "Shopping",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4430/4430494.png",
      content: "Music",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3637/3637788.png",
      content: "Beauty",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/268/268998.png",
      content: "Coding",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2177/2177994.png",
      content: "Live",
    },
    {
      img: "https://www.freeiconspng.com/thumbs/game-icon-png/games-icon-png-4.png",
      content: "Gaming",
    },
    {
      img: "https://w7.pngwing.com/pngs/316/265/png-transparent-computer-icons-movie-projector-multimedia-projectors-film-movie-theatre-electronics-text-rectangle.png",
      content: "Movies",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/21/21601.png",
      content: "News",
    },
    {
      img: "https://www.freeiconspng.com/thumbs/sports-icon-png/sports-running-icon-2.png",
      content: "Sports",
    },
    {
      img: "https://static.thenounproject.com/png/337564-200.png",
      content: "Fashion",
    },
    {
      img: "https://static.thenounproject.com/png/3303307-200.png",
      content: "Shows",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3222/3222625.png",
      content: "Machine Learning",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/98/98758.png",
      content: "Children",
    },
    {
      img: "https://w7.pngwing.com/pngs/422/208/png-transparent-web-development-web-design-web-developer-computer-icons-developer-text-web-application-mobile-app-development.png",
      content: "Webdev",
    },
    {
      img: "https://www.nicepng.com/png/detail/523-5230927_png-file-random-icon.png",
      content: "Random",
    },
  ];
  return (
    <>
      {genre.map((val, key) => {
        //  console.log('kartik' + '' + val.content)
        return (
          <div
            key={key}
            className="sidebar justify-content-center align-items-center border-bottom my-1"
            onClick={() => {
              dispatch(
                fetchVideos(val.content)
              );
            }}
          >
            <h5>
              <img
                src={val.img}
                alt={val.content}
                style={{ height: "40px", width: "40px" }}
              />{" "}
              {val.content}
            </h5>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
