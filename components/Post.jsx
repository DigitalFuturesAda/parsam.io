import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Date from "./Date";

const Post = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{postData.title} - Parsa Mesgarha</title>
      </Head>
      <header>
        <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export default Post;
