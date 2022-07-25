import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="row mb-5 animate__animated animate__fadeIn">
            <h1 className="text-center">HeroList - {publisher}</h1>
            <div className="row g-3 row-cols-3">
                {
                    heroes.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero} /* Para enviar todas las demas propiedades del hero */
                        />
                    ))
                }
            </div>
        </div>
    )
}
