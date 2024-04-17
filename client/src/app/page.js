"use client";
import './components/styles.css';
import { useCookies } from 'react-cookie';
import { useSession, SessionProvider } from 'next-auth/react'; // Import useSession and SessionProvider
import {Auth} from "./components/toggleForms"
import Home1 from './Home';
import Navbar from './components/Navbar';
import News from '../../pages/news';
import newsitems from './components/newsitems';
import Home from "./components/home"; 
const Page = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };

  const token = cookies.token;
  const email = cookies.email;

  return (
    

    
     

    <div>
    <Home1/>
    </div>
  )
};

export default Page