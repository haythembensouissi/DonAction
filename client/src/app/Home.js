import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import {Image} from "next/image"
import { useCookies } from 'react-cookie';
import Navbar from "./components/Navbar";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
 
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [loading, setLoading] = useState(true);
  const token=cookies.token;
  const email=cookies.email
  const { data: session ,status} = useSession();
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };
  if (status === "loading") {
    // Show loading spinner
    return (
      <div className="loading-spinner">
        <ClipLoader color={"#36D7B7"} loading={loading} size={50} />
      </div>
    );
  }
  return (
    
    <div>
      {session ? (
        <div>
         
          <Navbar image={session.user.image} email={session.user.email} session={session} />
        
        </div>
      ) : token?(
        <div>
        <Navbar email={email} />    
      
             
               
             </div>
      ):(
        <div>
          
          <div className="cont">
          <ToggleForms/>
          </div>
         
        </div>
      )}
    </div>
  );
}
