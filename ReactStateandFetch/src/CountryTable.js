import React from "react";

const CountryTable = (props) => {
  console.log("CountryTable");
  const { labels, countries } = props;
  return (
    <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
          <tr key={1}>
            {labels.map((label) => (
              <td>{label}</td>
            ))}
          </tr>

        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{country.timezones[0]}
                {country.timezones.length > 1 ? " (+" + (country.timezones.length - 1) + ")" : ""}
              </td>
              <td>{country.borders[0]}
                {country.borders.length > 1 ? " (+" + (country.borders.length - 1) + ")" : ""}
              </td>
              <td>{country.topLevelDomain[0]}
                {country.topLevelDomain.length > 1 ? " (+" + (country.topLevelDomain.length - 1) + ")" : ""}
              </td>
              <td>{country.currencies[0]}
                {country.currencies.length > 1 ? " (+" + (country.currencies.length - 1) + ")" : ""}
              </td>
              <td>{country.languages[0]}
                {country.languages.length > 1 ? " (+" + (country.languages.length - 1) + ")" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;