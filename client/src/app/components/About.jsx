import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "./Buttom";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/1.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          Welcome to our donation platform dedicated to supporting 
          the people of Palestine. As we witness the ongoing humanitarian challenges
           faced by Palestinians, your generosity can make a significant difference
            in providing essential aid and relief to those in need. With your support,
             we aim to address urgent humanitarian needs, including access to clean water
             , food security, healthcare, education, and shelter, while also advocating for
            <br />
            <br />
            long-term sustainable solutions to the underlying causes
             of poverty and hardship in Palestine. Together, we can make
              a positive impact and help build hope for a brighter future for
               all Palestinians. Join us in our mission to stand in solidarity wit
               h the people of Palestine and make a meaningful difference in their l
               ives. Every donation counts

          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          Our site serves as a vital channel
          for individuals around the world to contribute to humanitarian efforts aimed 
          at alleviating the suffering and addressing the urgent needs of Palestinian communities
          affected by conflict, displacement, and socio-economic challenges. Through our platform,
          users can make secure and transparent donations that directly impact the lives of Palestinians,
          providing essential aid such as food, shelter, medical assistance, education, and psychosocial 
          support. Together, we can make a meaningful difference and stand in solidarity with the resilient people
          of Palestine as they strive for dignity, justice, and a brighter future. Join us in extending compassion
          and solidarity to those in need.
            <br />
            <br /> - Donation 
            <br />
            <br /> - Blog
            <br />
            <br /> -News
          </p>
          <Button url="/Contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;