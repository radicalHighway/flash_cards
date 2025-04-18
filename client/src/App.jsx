
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './app/Root';
import MainPage from './pages/Main/MainPage';


function App() {
 
  const router = createBrowserRouter([
    {
      path: '/', 
      Component: Root, 
      children: [
      
        { index: true, Component: MainPage }, 
        // { path: '/lk', Component: LkPage }, // Личный кабинет
        // { path: '/leaders', Component: LeadersPage }, // Таблица лидеров
        { path: '/themes', Component: LeadersPage }, 
      ],
    },
  ]);

  // RouterProvider - провайдер для роутера
  return <RouterProvider router={router} />;
}

export default App
