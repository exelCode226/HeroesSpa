import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroesFiltered = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-primary">Search a hero</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
