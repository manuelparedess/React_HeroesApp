import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    image
}) => {
    return (
        <div className='col'>
            <div className='card p-0 shadow-sm'>
                
                <div className='row'>
                    <div className='col-4'> 
                        <img src={ image } className='card-img-top' alt={superhero} /> 
                    </div>

                    <div className='col-8'>

                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !== characters) && <p className='text-muted'>{characters}</p>
                            }

                            <p>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>
                            
                            <Link to={`/hero/${id}`}>Mas...</Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}