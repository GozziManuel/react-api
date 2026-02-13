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
            <div key={index} className="col-4">
              <div className="card h-100">
                <img
                  src={element.image}
                  className="card-img-top "
                  alt={element.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                  <p className="card-text">{element.birth_year}</p>
                  <p className="card-text">{element.nationality}</p>
                  <p className="card-text">{element.biography}</p>
                  <p className="card-text">{element.awards.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
