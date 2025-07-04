import { Link } from "react-router";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imageUrl = `heroes/${ id }.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imageUrl} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <p>{first_appearance}</p>
             <Link to={`/hero/${id}`}>
             Mas..
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
