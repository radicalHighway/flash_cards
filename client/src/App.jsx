
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './app/Root';
import MainPage from './pages/Main/MainPage';
import ThemePage from './pages/ThemePage/ThemePage';


function App() {
 
  const router = createBrowserRouter([
    {
      path: '/', 
      Component: Root, 
      children: [
      
        { index: true, Component: MainPage }, 
        // { path: '/lk', Component: LkPage }, // Личный кабинет
        // { path: '/leaders', Component: LeadersPage }, // Таблица лидеров
        { path: '/themes', Component: ThemePage }, 
        { path: '/themes/:id', Component: ThemePage },
        // { path: '/auto', Component: ThemePage }, 
        // { path: '/movies', Component: ThemePage }, 
        // { path: '/miscellaneous', Component: ThemePage }, 
        // { path: '/presedent', Component: ThemePage }, 
      ],
    },
  ]);

  // RouterProvider - провайдер для роутера
  return <RouterProvider router={router} />;
}

export default App
