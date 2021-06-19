import "./filter.sass";
export default function Filter({ year, setYear }) {
  return (
    <div className="filter">
      <select
        onChange={e => setYear(e.target.value)}
        value={year}
        className="filter__selector"
        name="pets"
        id="pet-select"
      >
        <option className="filter__option" value="">
          all
        </option>
        <option className="filter__option" value="2021">
          2021
        </option>
        <option className="filter__option" value="2020">
          2020
        </option>
        <option className="filter__option" value="2019">
          2019
        </option>
      </select>
    </div>
  );
}
