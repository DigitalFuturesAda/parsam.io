import Head from "next/head";
import Link from "next/link";
import NowPlaying from "../components/NowPlaying";
import styles from "../styles/modules/Home.module.css";
import utilStyles from "../styles/utils.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Parsa Mesgarha</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.greeting}>
          <h1 className={utilStyles.heading2Xl}>👋 Hi, I&apos;m Parsa.</h1>
          <p className={utilStyles.lightText}>
            Software Development Apprentice at Google
          </p>
          <div className={styles.nowPlaying}>
            <NowPlaying />
          </div>
        </div>
      </header>
      <div>
        <p>
          Keen on learning deeply about stuff like tech, startups, and life, I
          tend to spend the majority of my time learning through books, podcasts
          and other resources online.
        </p>
        <p>
          My website is where I write{" "}
          <Link href="/notes">
            <a>notes</a>
          </Link>{" "}
          on the books I’ve read, providing summaries for others to get a rough
          understanding of what the book is about. On top of that, I write{" "}
          <Link href="/articles">
            <a>articles</a>
          </Link>{" "}
          which revolve around the topics I’m most interested in. I’m trying my
          best to improve on making quality posts, so feel free to message me on
          twitter with any feedback you might have.
        </p>
        <p>
          Also if you don’t want to miss out on any book notes I publish,
          subscribe to my{" "}
          <a
            href="https://parsamesgarha.substack.com/"
            rel="prefetch noreferrer"
            target="_blank"
          >
            Substack
          </a>{" "}
          so they land straight into your inbox.
        </p>
      </div>
    </div>
  );
};

export default Home;
