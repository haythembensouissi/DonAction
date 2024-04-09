import { useSession, SessionProvider } from "next-auth/react";
import ToggleForms from "./components/toggleForms";
import {Image} from "next/image"
import Navbar from "./components/Navbar";
import News from "../../pages/news";
import NewsItem from "./components/newsitems";
export default function Home() {
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
          <Navbar /> {/* Render Navbar when user is signed in */}
          <News />   {/* Render News when user is signed in */}
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
    </div>
  );
}
