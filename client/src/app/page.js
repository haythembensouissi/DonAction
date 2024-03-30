"use client"
import React from 'react';
import { useCookies } from 'react-cookie';
import { useSession, SessionProvider } from 'next-auth/react';
import Navbar from './components/Navbar';
import News from './news';

const Page = () => {
  const [cookies, , removeCookie] = useCookies(null);
  const { data: session } = useSession();

  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };

  const token = cookies.token;
  const email = cookies.email;

  return (
    <SessionProvider session={session}> {/* Ensure useSession is wrapped within SessionProvider */}
      <div>
        {token ? (
          <div>
            <Navbar />
            <News />
            Welcome {email}
            <button onClick={() => signout()}>Sign out</button>
          </div>
        ) : (
          <Home />
        )}
      </div>
    </SessionProvider>
  );
};

export default Page;
