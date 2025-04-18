import React from 'react'
import './ThemePage.css'
import { useNavigate } from 'react-router';
export default function ThemePage() {
  const navigate = useNavigate();
  return (
    <div className='themePage'>
      <div className='one'>
      <div className='auto'>
        <h2>Автомобили</h2>
        <img alt='Автомобили' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqsCKXlVLKRjkmj-JyBQdG20R3sPXaxZgjA&s'/>
        <button onClick={() => navigate('/auto')}>Играть!</button>
      </div>
      <div className='movies'>
        <h2>Кино</h2>
        <img alt='Кинофильмы' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEGZZgyaFJnQP6T4v1ATWj2gsUnz15uCVzg&s'/>
        <button onClick={() => navigate('/movies')}>Играть!</button>
      </div>
      </div>
      <div className='two'>
      <div className='miscellaneous'>
        <h2 >Разное</h2>
        <img alt='Разное' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI3XVEfIgOJysazXaBLWjSKhE9M7XPrBnow&s'/>
        <button onClick={() => navigate('/miscellaneous')}>Играть!</button>
      </div>
      <div className='presedent'>
        <h2>Презеденты США</h2>
        <img alt='Презеденты' src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSdsrvUs2jyc0BwI1KFoQIaSa9jjmBCSQGLjCdZUM2_skS-lUnNC7XIdyPA_BiAZyYzLjimxYeJyw-m9mo'/>
        <button onClick={() => navigate('/presedent')}>Играть!</button>
      </div>
      </div>
    </div>
  )
}
