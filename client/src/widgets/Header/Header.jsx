import React from 'react'
import { NavLink } from 'react-router';
import './Header.css';



export default function Header() {
  return (
    <header>
      <NavLink
       to='/'>
        Главная
      </NavLink>
      <NavLink
       to='/lk'>
        Личный кабинет
      </NavLink>
      <NavLink
       to='/leaders'>
        Таблица лидеров
      </NavLink>
    </header>
  )
}
