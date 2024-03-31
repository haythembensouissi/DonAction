import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from "next/font/google";
import "./globals.css";
import Bootsrapcomponent from './components/Bootsrapcomponent';
import { EdgeStoreProvider } from '../lib/edgestore';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DonApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
      <Bootsrapcomponent />
      </body>
    </html>
  );
}