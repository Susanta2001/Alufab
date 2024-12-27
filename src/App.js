import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Blogs from './components/Blogs'
import Academic from './components/Academic';

function App() {
  const router = createBrowserRouter([
    {
      path:'/academic',
      element:
      <>
        <Academic/>
      </>
    },
    {
      path:'/',
      element: 
      <>
        <Navbar/>
        <Home/>
      </>
    },
    {
      path:'/home',
      element: 
      <>
        <Navbar/>
        <Home/>
      </>
    },
    {
      path:'/about',
      element: 
      <>
        <Navbar/>
        <About/>
      </>
    },
    {
      path:'/services',
      element: 
      <>
        <Navbar/>
        <Services/>
      </>
    },
    {
      path:'/projects',
      element: 
      <>
        <Navbar/>
        <Projects/>
      </>
    },
    {
      path:'/insights',
      element: 
      <>
        <Navbar/>
        <Insights/>
      </>
    },
    {
      path:'/blogs',
      element: 
      <>
        <Navbar/>
        <Blogs/>
      </>
    },
    {
      path:'/careers',
      element: 
      <>
        <Navbar/>
        <Careers/>
      </>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
