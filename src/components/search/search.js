import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";
import './search.css';
const Search = ({ onSearchChange, onSearchError }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    const loadOptions = (inputValue) => {
        const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9f7e4b75amshdb03396f6a4fcc1p1f43c2jsnbed14f0d9d6e',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        return fetch(
            `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
            geoApiOptions
        )
            // return fetch(url, options)
            .then((response) => response.json())
            .then((response) => {
                try {
                    return {
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            };
                        })
                    }
                } catch (error) {
                    console.error(error); onSearchError(error.message)
                }

            }

            )
            .catch((err) => { console.error(err); onSearchError(err.message) });
    };
    return (
        <AsyncPaginate
            className="search"
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;
