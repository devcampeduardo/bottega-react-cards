import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'


export default function card({title, imageSource, text, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      
      <div className='overflow'>
      <img src={imageSource} alt='' className='card-img-top' />
      </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary' >
              {
                text ? text : 'Después de Nirvana. Pearl Jam es lo más grandioso del grounge. Una banda completa en todos los sentidos. Viva Pearl Jam...!'
              }
            </p>
            <a href={url} className='btn btn-outline-secondary rounder-0' target='_blank'>
               Go to this website
            </a>
        </div>
    </div>
  )
}

card.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}
