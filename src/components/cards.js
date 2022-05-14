import React from 'react';
import Card from "./card";
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';

const cards = [
    {
        id:1,
        title: 'Nirvana',
        image: imagen1,
        url: 'https://www.nirvana.com/'
    },
    {
        id:2,
        title: 'Pearl Jam',
        image: imagen2,
        url: 'https://pearljam.com/',
        text: '2020 officially marks 30 years of Pearl Jam performing live. Pearl Jam was inducted into the Rock and Roll Hall of Fame in 2017.'
    },
    {
        id:3,
        title: 'Smashing Pumpkins',
        image: imagen3,
        url: 'https://smashingpumpkins.com/',
        text: 'To celebrate the 26th anniversary of Mellon Collie and the Infinite Sadness, The Smashing Pumpkins want you to share your MCIS memories and stories. Use the form below to send your memories!'
    }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
           {
               cards.map(card => (
                <div className='col-md-4' key={card.id}>
                <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
               ))
           }
        </div>
    </div>
  )
}

export default Cards
