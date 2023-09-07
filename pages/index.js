import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blogger</h1>
        <img
          className={styles.myImg}
          src="/homeimg.jpg"
          alt="logo"
          width={237}
          height={158}
        />
        <p className={styles.description}>A blog for coders by a coder</p>
        <div className="blogs">
          <h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to learn Javascript</h3>
            <p>
              Javascript is the language of the web. With it, you can do wonders
              in web development
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript</h3>
            <p>
              Javascript is the language of the web. With it, you can do wonders
              in web development
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript</h3>
            <p>
              Javascript is the language of the web. With it, you can do wonders
              in web development
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
