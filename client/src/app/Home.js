import { useSession, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import { useCookies } from 'react-cookie';
import Navbar from "./components/Navbar";
import Home from "./components/home"; // Updated component name to start with uppercase letter
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function HomePage() { // Renamed component to HomePage for clarity
  
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const [cookies, , removeCookie] = useCookies(null); // Removed unused setCookie
  const [loading] = useState(true); // Removed unused setLoading
  const token = cookies.token;
  const email = cookies.email;
  const { data: session, status } = useSession();
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
        <Home/>
        </div>
      ) : token ? (
        <div>
          <Navbar email={email} />    
          <Home/>
        </div>
      ) : (
        <div>
          <div className="cont">
            <ToggleForms />
          </div>
        </div>
      )}
    </div>
  );
}