import Head from "next/head";
import Link from "next/link";
import Date from "./Date";

interface PostProps {
  postType: "note" | "article";
  postData: {
    title: string;
    author: string;
    date: string;
    contentHtml: string;
    image: string;
  };
}

const Post: React.FC<PostProps> = ({ postType, postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title} - Parsa Mesgarha</title>
        <meta
          property="og:site_name"
          content={
            postType === "note"
              ? `${postData.title} by ${postData.author}`
              : postData.title
          }
          key="og:site_name"
        />
        <meta
          property="og:title"
          content={`${postData.title} by ${postData.author}`}
          key="og:title"
        />
        <meta
          property="og:image"
          content={`https://parsam.io${postData.image}`}
          key="og:image"
        />
        <meta
          name="twitter:title"
          content={`${postData.title} by ${postData.author}`}
          key="twitter:title"
        />
        <meta
          name="twitter:image"
          content={`https://parsam.io${postData.image}`}
          key="twitter:image"
        />
      </Head>
      <div className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          {postData.title}
        </h1>
        <div className="text-neutral-600 dark:text-neutral-400 mt-2">
          {postType === "note" ? <>by {postData.author} - </> : ""}
          <Date dateString={postData.date} />
        </div>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <div className="max-w-fit mt-6">
        <Link href={`/${postType}s`}>
          <a className="text-xl font-bold fold:text-sm hover:text-neutral-500 dark:hover:text-neutral-400 transition-all cursor-pointer">
            ← Back to {postType}s
          </a>
        </Link>
      </div>
    </>
  );
};

export default Post;
