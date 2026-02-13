import ActorCard from "./card/ActorCard";

export default function MainApp() {
  return (
    <>
      <div className="container-sm">
        <h1 className="my-4">Actors List:</h1>
        <div className="row g-3 justify-content-center">
          <ActorCard />
        </div>
      </div>
    </>
  );
}
