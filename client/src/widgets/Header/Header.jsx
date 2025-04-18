import React from 'react'
import { NavLink } from 'react-router';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='header__link'
        activeClassName='active'
        exact
      >
        Главная
      </NavLink>
      <NavLink
        to='/themes'
        className='header__link'
        activeClassName='active'
      >
        Темы
      </NavLink>
      <NavLink
        to='/lk'
        className='header__link'
        activeClassName='active'
      >
        Личный кабинет
      </NavLink>
      <NavLink
        to='/leaders'
        className='header__link'
        activeClassName='active'
      >
        Таблица лидеров
      </NavLink>
    </header>
  )
}