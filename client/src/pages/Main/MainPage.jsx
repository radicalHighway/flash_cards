import React, { useEffect, useState } from 'react'
import './MainPage.css'
import { useNavigate } from 'react-router';

export default function MainPage() {
const [count, setCount] = useState(0);
const [showContent, setShowContent] = useState(false)
    const navigate = useNavigate();


    useEffect(() => {
      // Таймер обратного отсчета
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= 4) {
            clearInterval(timer);
            setShowContent(true)
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    
    
      // Очистка эффекта
      return () => {
        clearInterval(timer);
      };
    }, []);
    
  return (
    <div className='mainPage'>
      <div className='video'>
        <video 
         autoPlay 
        //  loop 
         muted 
         playsInline
         className='video__element'><source src="v.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.</video>
      </div>
      <div className='btnAndP'>
      {showContent ? (
        <>
 <p>Сыграем в игру?</p>
 <button onClick={() => navigate('/themes')}>Играть !</button>
 </>
      ) : (
        <p>Загрузка...</p>
      )}
     
    </div>
    </div>
  )
}

