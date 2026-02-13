import ActorCard from "./card/ActorCard";
import ActressCard from "./card/ActressCard";

export default function MainApp() {
  return (
    <>
      <div className="container-sm">
        <h1 className="my-4">Actors List:</h1>
        <div className="row g-3 justify-content-center mb-5">
          <ActorCard />
        </div>
        <h1 className="my-4">Actress List:</h1>
        <div className="row g-3 justify-content-center mb-5">
          <ActressCard />
        </div>
      </div>
    </>
  );
}
