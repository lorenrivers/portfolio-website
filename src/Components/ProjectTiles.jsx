import { Link } from "react-router-dom";

export default function ProjectTiles() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 min-[400px]:pl-10">
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img
            src="/flavor-voyage.png"
            alt="screenshot of the flavor.voyage homepage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Flavor.Voyage</h2>
          <div className="card-actions justify-end">
            <Link to="/portfolio">
              <button className="bg-teal-600 text-white p-4 w-fit self-center rounded-xl m-2 hover:bg-teal-950/75 ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="/taste-trekkers.png"
            alt="screenshot of the Taste Trekkers homepage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Taste Trekkers</h2>
          <div className="card-actions justify-end">
            <Link to="/portfolio">
              <button className="bg-teal-600 text-white p-4 w-fit self-center rounded-xl m-2 hover:bg-teal-950/75 ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="react-cookie-clicker.png"
            alt="screenshot of the cookie clicker game homepage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cookie Clicker</h2>
          <div className="card-actions justify-end">
            <Link to="/portfolio">
              <button className="bg-teal-600 text-white p-4 w-fit self-center rounded-xl m-2 hover:bg-teal-950/75 ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
