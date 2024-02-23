import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import {Image} from "next/image"
import "./components/styles.css"
export default function Home() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          Signed in as {session.user.name} <br />
          <img src={session.user.image} height={300} width={300}/>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          
          <div className="cont">
          <ToggleForms/>
          </div>
         
        </div>
      )}
    </>
  );
}
