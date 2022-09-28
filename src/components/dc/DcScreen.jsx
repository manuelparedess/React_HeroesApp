import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <div className='d-flex justify-content-center animate__animated animate__fadeIn'>
                <img className='dc mt-3' src='https://i.ibb.co/KNb9vw0/DC-logo.jpg' alt='DC_logo' /> 
            </div>
            <hr />

            <HeroList publisher={'DC Comics'}/>
        </div>
    )
}