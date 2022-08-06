import React, { Component } from "react";

const url = "https://restcountries.com/v3.1/all";

class Countries extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      isLoading: true,
      search: '',
    };
  }

  componentDidMount() {
    this.getAllCountries();
  }

  getAllCountries = async () => {
    const response = await fetch(url);
    const results = await response.json();

    this.setState({
      isLoading: false,
      countries: results,
    });
  };

  getCountriesByName = async (searchTerm) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
    const results = await response.json();

    this.setState({
      isLoading: true,
    }, () => {
            this.setState({
                countries: results,
                isLoading: false,
            })      
    });
  };

  handleChange = ({target}) => {
    this.setState({
        [target.name]: target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { search } = this.state;
    this.getCountriesByName(search)
  }

  render() {
    const { countries, isLoading, search } = this.state;
    return (
      <main>
        <div>
          <label htmlFor="search">
            <input
              placeholder="Pesquisar"
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Pesquisar
          </button>
        </div>
        <section>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            countries.map((country) => (
              <div key={country.cca3}>
                <h4>{country.translations.por.common}</h4>
                <p>{country.capital}</p>
                <img src={country.flags.png} alt="capital flags" />
              </div>
            ))
          )}
        </section>
      </main>
    );
  }
}

export default Countries;
