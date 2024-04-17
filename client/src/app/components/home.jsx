import React from 'react';

function Home() {
  return (
    <div>
      <header style={{
        height: '100vh',
        backgroundImage: `linear-gradient(
          rgba(45, 92, 132, 0.5),
          rgba(45, 92, 132, 0.5)
        ),
        url("https://th.bing.com/th/id/OIP.N7tq26qDpVAQyD_uMMec-QHaE8?rs=1&pid=ImgDetMain")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className="section__container" style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div className="header__content">
            <h1 style={{
              fontSize: '5rem',
              fontWeight: 400,
              lineHeight: '5rem',
            }}>Travel</h1>
            <p style={{ textAlign: 'center' }}>
              Embark on a journey of a lifetime and explore the world's most
              breathtaking destinations with our expert travel advice. From exotic
              beaches to cultural wonders, we've got you covered with our
              comprehensive travel guides and insider tips.
            </p>
            <button style={{
              padding: '1rem 2rem',
              outline: 'none',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: 'var(--primary-color)',
              color: 'var(--extra-light)',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: '0.3s',
            }}>Read more</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;