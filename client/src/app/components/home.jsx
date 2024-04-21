import Image from "next/image";
import Buttom from "./Buttom"
import styles from "./pagee.module.css"
import Hero from "../../../public/hero.png"
export default function Home() {
  return (
    
    <div className={styles.container}>

      <div className={styles.item}>
        <h1 className={styles.title}>
          Palastine needs us, needs all muslims arround the world
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <a href="/portfolio"><button className={styles.b} type="button">Get to know Palastine</button></a>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>

  );
}