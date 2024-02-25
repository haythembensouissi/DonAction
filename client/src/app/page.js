"use client";

import './components/styles.css';
import { useCookies } from 'react-cookie';
import { useSession, SessionProvider } from 'next-auth/react'; // Import useSession and SessionProvider
import {Auth} from "./components/toggleForms"
import Home from './Home';
import Navbar from './components/Navbar';
import News from './news';
import newsitems from './components/newsitems';
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
    
      {token ? (
       
        <div>
         <Navbar />
   <News/>
          Welcome {email}
          <button onClick={() => signout()}>Sign out</button>
        </div>
      ) : (
       <Home/>
      )}
    </div>
  );
};

export default Page
