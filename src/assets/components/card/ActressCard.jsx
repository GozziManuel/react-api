import axios from "axios";
import { useEffect, useState } from "react";
export default function ActressCard() {
  const [actress, setActress] = useState([]);
  const axiosGetActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => {
      setActress(res.data);
      console.log(res.data);
    });
  };
  useEffect(axiosGetActress, []);
  return (
    <>
      {actress.map((element, index) => (
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
              <p className="fw-bold my-1">Awards</p>

              <p className="card-text">{element.awards}</p>
              <p className="fw-bold my-1">Film Famosi</p>
              <p className="card-text">
                {element.most_famous_movies.join("- ")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
