import axios from "axios";
import { useEffect, useState } from "react";

export default function MainApp() {
  const [actors, setActors] = useState([]);
  const axiosGetActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      setActors(res.data);
      console.log(res.data);
    });
  };
  useEffect(axiosGetActors, []);
  return (
    <>
      <div className="container-sm">
        <h1 className="my-4">Actors List:</h1>
        <div className="row g-3">
          {actors.map((element, index) => (
            <div className="card col-3 h-100" key={index}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
