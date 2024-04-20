"use client";
import { useSession, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import { useCookies } from 'react-cookie';
import Navbar from "./components/Navbar";
import Home from "./components/home";
import { ClipLoader } from "react-spinners";
import styles from "./page.module.css";
import Buttom from "./components/Buttom";
export default function HomePage() { 
  
  return (
    <SessionProvider>
<Navbar/>
    </SessionProvider>
  );
}

function Content() {
  const [cookies, , removeCookie] = useCookies(null); 
  const [loading] = useState(true); 
  const token = cookies.token;
  const email = cookies.email;
  const { data: session, status } = useSession();
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };
  if (status === "loading") {
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
       <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
    </div>
  );
}
