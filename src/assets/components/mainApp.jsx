import axios from "axios";
import { useEffect, useState } from "react";

export default function MainApp() {
  const [actors, setActors] = useState([]);
  const axiosGetActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((res) => {
      console.log(res.data);
    });
  };
  useEffect(axiosGetActors, []);
  return <></>;
}
