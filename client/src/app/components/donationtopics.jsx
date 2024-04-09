import React from 'react';

function DonationCard({ title, description, totalDonation, image }) {
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
        <a href="#" className="btn btn-primary btn-block">Donate Now</a>
      </div>
    </div>
  );
}

function DonationTopic() {
  const donationCards = [
    {
      title: "Support Education",
      description: "Donating to support education is an investment in the future of individuals and communities.",
      totalDonation: 5000,
      image: "https://th.bing.com/th/id/R.b2a884086d2c41fa6d070183a2826908?rik=Q52SWhM2WaZ1mg&pid=ImgRaw&r=0",
    },
    {
      title: "Support Healthcare",
      description: "Donating to support healthcare ensures access to essential medical services for those in need.",
      totalDonation: 8000,
      image:"https://4.bp.blogspot.com/-0ztSpt1E1DQ/TYu6vN1qPnI/AAAAAAAAAM8/APCSRW18Ong/s1600/syria460x276.jpg",
    },
    {
      title: "Nutrition Support",
      description: "Providing nutrition support to communities in need ensures access to healthy food and promotes well-being.",
      totalDonation: 3000,
      image: "https://www.anera.org/wp-content/uploads/2019/02/Gaza-covid19-email.jpg",
    },
    {
      title: "Create Hospitals",
      description: "Creating hospitals helps provide medical care to those who need it and saves lives.",
      totalDonation: 10000,
      image: "https://th.bing.com/th/id/OIP.K_e7mQk-EQHG9Jg9_SEPigHaE8?rs=1&pid=ImgDetMain",
    },
    {
      title: "Build Schools",
      description: "Building schools provides children with access to education and helps them build a brighter future.",
      totalDonation: 7000,
      image: "https://th.bing.com/th/id/R.9bc953de9f7902c5989d4d69497da92e?rik=%2f%2bykVCuhUeymAw&pid=ImgRaw&r=0",
    },
    {
      title: "Support Specific Family",
      description: "Supporting a specific family in need can provide them with essential resources and improve their quality of life.",
      totalDonation: 2000,
      image: "https://www.aljazeera.com/mritems/Images/2013/7/8/201378143837103734_20.jpg",
    },
  ];

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {donationCards.map((card, index) => (
        <DonationCard
          key={index}
          title={card.title}
          description={card.description}
          totalDonation={card.totalDonation}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default DonationTopic;
