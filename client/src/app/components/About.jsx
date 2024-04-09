// pages/about.js

import Head from 'next/head';

function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className="text-center mb-4">About Our Project</h1>
            <p className="lead text-center">
              Our project is dedicated to collecting donations for Palestine. We aim to provide humanitarian aid to the people affected by the ongoing crises in the region. By contributing to our cause, you can help make a difference in the lives of those in need.
            </p>
            <p className="text-center">
              For more information or inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .lead {
          font-size: 1.25rem;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default About;
