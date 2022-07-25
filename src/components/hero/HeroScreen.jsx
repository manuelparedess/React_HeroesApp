import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
    
    //useParams devuelve el path de la ruta
    const { heroID }= useParams();
    const navigate = useNavigate();
    
    const hero = useMemo( () => getHeroById(heroID), [heroID] );

    const handleReturn = () => {
        navigate(-1); //useNavigate puede recibir parametros como -1 para regresar a la pag anterior
    }


    if(!hero) {
        return <Navigate to='/' />
        //Navigate funciona como useNavigate pero se 
        //utiliza como componente para que el componente 
        //padre siga siendo un functional component(o sea 
        //que devuelve otro componente o codigo jsx)
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__backInLeft" src={`/src/assets/${hero.id}.jpg`} alt={hero.superhero} />
            </div>

            <div className="col-8 animate__animated animate__backInRight">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b> Alter ego: </b> {hero.alter_ego} </li>
                    <li className="list-group-item"><b> Publisher: </b> {hero.publisher} </li>
                    <li className="list-group-item"><b> First Appearance: </b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>

                <button className="btn btn-outline-info" onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}