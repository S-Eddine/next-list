import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        lorem sed odio efficitur sagittis. Nunc consectetur lectus id est
        tristique, sed tincidunt nisl consectetur. 
      </p>
      <p className={styles.text}>
        Sed in sollicitudin nunc, nec euismod neque. Sed quis lectus ultrices,
        hendrerit lectus sed, venenatis tellus. Sed pretium leo eu lorem varius,
        sed dictum dolor commodo. Duis et leo et eros imperdiet semper lacinia
        aliquet odio. Phasellus sit amet pretium velit, a aliquam turpis.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
};

export default Home;
