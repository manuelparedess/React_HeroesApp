import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'
import { useMemo } from "react";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    const heroesFilter = useMemo(() => getHeroByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText)

        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <h1 className="search">Search</h1>
            <hr />

            <div className="row mb-5">

                <div className="col-5">
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={handleSearch} aria-label='form'>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-3"
                        >
                            Searching...
                        </button>
                    </form>

                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    <div className="row row-cols-1 g-3 searchlist">

                        {
                            (q === '')
                                ? <div className="alert alert-info">Look for a hero</div>
                                : (heroesFilter.length === 0)
                                && <div className="alert alert-danger">No hero with: <b>{q}</b></div>
                        }

                        {

                            heroesFilter.map(hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                        }

                    </div>

                </div>

            </div>
        </>
    )
}