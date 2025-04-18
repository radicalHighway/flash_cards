
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './app/Root';
import MainPage from './pages/Main/MainPage';
import ThemePage from './pages/ThemePage/ThemePage';
import QuestionCard from "./pages/QuestionCard/QuestionCard"

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
        { path: '/themes/:theme', Component: QuestionCard }, 
        // { path: '/themes/films', Component: QuestionCard }, 
        // { path: '/themes/others', Component: QuestionCard }, 
        // { path: '/themes/presidents', Component: QuestionCard }, 
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
