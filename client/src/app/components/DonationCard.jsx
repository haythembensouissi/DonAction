import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

function DonationCard({ title, description, totalDonation, image,index }) {
  const router=useRouter()
  const [cookies,setCookie , removeCookie] = useCookies(null); // Removed unused setCookie
    const cardStyle = {
      width: '18rem',
      height: '100%', // Set the height of the card
      display: 'flex',
      flexDirection: 'column', // Align content in a column
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
      margin: '1rem',
    };
  
    const imageStyle = {
      width: '100%',
      height: '50%', // Set the height of the image to half of the card height
      objectFit: 'cover', // Maintain aspect ratio and cover the entire space
    };
  const donate= ()=>{
    router.push("/DonationForm")
    setCookie("amount",totalDonation)
    setCookie("id",index)
    setCookie("sessionemail",cookies.sessionemail)
  }
    return (
      <div className="card" style={cardStyle}>
        <img
          src={image}
          className="card-img-top"
          alt="Placeholder"
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Total Donation: ${totalDonation}</p>
          <Link href={`/DonationForm`} className="btn btn-primary btn-block"  onClick={()=>donate()}>Donate Now</Link>
        </div>
      </div>
    );
  }
export default DonationCard