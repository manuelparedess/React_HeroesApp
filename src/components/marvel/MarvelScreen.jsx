import React from 'react'
import { HeroList } from "../hero/HeroList"


export const MarvelScreen = () => {
    return (
        <div>
            <div role='marvel' className='d-flex justify-content-center animate__animated animate__fadeIn'>
                <img className="marvel mt-3" src='https://i.ibb.co/kDRtJ78/Marvel-Logo.jpg' alt='Marvel_logo' />
            </div>
            <hr />

            <HeroList publisher={'Marvel Comics'}/>
        </div>
    )
}
