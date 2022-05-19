import React from 'react'
import anubhab from "../asset/images/anubhab.jpg"
import abisek from "../asset/images/abisek.jpg"
import lasani from "../asset/images/lasani.jpg"
import rojalin from "../asset/images/rojalin.jpg"
import swagatika from "../asset/images/swagatika.jpg"
import saumyakanta from "../asset/images/saumyakanta.jpg"
import "../CSS/Credits.css"

function Credits() {
  return (
    <div className>
        <div className='header color-change-3x'>Meet the team</div>
        <div className='body'>
        <div className='teamholder'>


            <div className='card1 card'>
                <div className='card__image'><img src={abisek}/></div>
                <div className='card__name'>Abhisek</div>
            </div>

            <div className='card2 card'>
                <div className='card__image'><img src={anubhab}/></div>
                <div className='card__name'>Anubhab</div>
            </div>

            <div className='card3 card'>
                <div className='card__image'><img src={lasani}/></div>
                <div className='card__name'>Lasani</div>
            </div>

            <div className='card4 card'>
                <div className='card__image'><img src={rojalin}/></div>
                <div className='card__name'>Rojalin</div>
            </div>

            <div className='card5 card'>
                <div className='card__image'><img src={swagatika}/></div>
                <div className='card__name'>Swagatika</div>
            </div>

            <div className='card6 card'>
                <div className='card__image'><img src={saumyakanta}/></div>
                <div className='card__name'>Saumyakanta</div>
            </div>


        </div>
        </div>
    </div>

  )
}

export default Credits