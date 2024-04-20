
"use client";
import { useEffect } from 'react';
import { useSession, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import { useCookies } from 'react-cookie';
import Navbar from "./components/Navbar";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import styles from "./pagee.module.css";

export default function HomePage() {
  // Run this code only on the client-side
  useEffect(() => {
    // Your client-side specific code here
    console.log("Client-side code executed");
  }, []); 

  return (
    <SessionProvider>
      <Content/>
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
        </div>
      ) : token ? (
        <div>
          <Navbar email={email} />
          <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Buttom url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>
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
