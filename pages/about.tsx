import Head from "next/head";
import Image from "next/legacy/image";
import PageTitle from "../components/PageTitle";
import me from "../public/images/me.jpg";

export default function About() {
  const title = "About Me - Parsa Mesgarha";
  const image = "about.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:site_name" content={title} key="og:site_name" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={title} key="og:description" />
        <meta
          property="og:image"
          content={`https://parsam.io/images/og/${image}`}
          key="og:image"
        />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={title}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={`https://parsam.io/images/og/${image}`}
          key="twitter:image"
        />
      </Head>
      <div className="prose dark:prose-invert">
        <PageTitle name="About Me" />
        <div className="relative sm:flex sm:flex-row-reverse">
          <div className="mx-auto w-60 h-60 sm:w-full sm:h-full ">
            <Image className="rounded-full" src={me} alt="Parsa Mesgarha" />
          </div>
          <div className="prose dark:prose-invert mt-5 sm:mr-3 sm:mt-0">
            <p>
              For the really curious, I&apos;ve compiled a list of some things
              that might paint a picture of the type of person I am.
            </p>
            <p>
              These things bring me joy, and there could be someone out there
              who has similar interests. If thats the case, message me on{" "}
              <a
                href="https://twitter.com/pzrsaa"
                rel="prefetch noreferrer"
                target="_blank"
              >
                twitter
              </a>{" "}
              as I love meeting new people.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 mt-8">I Like</h2>
          <ul>
            <li>
              <a
                href="https://github.com/pzrsa?tab=stars"
                rel="prefetch noreferrer"
                target="_blank"
              >
                Open source projects
              </a>
              . It&apos;s fascinating that random people all over the internet
              are able to come together to change the world.
            </li>
            <li>
              Reading{" "}
              <a
                href="https://www.goodreads.com/review/list/125053326?page=1&shelf=%23ALL%23"
                rel="prefetch noreferrer"
                target="_blank"
              >
                books
              </a>{" "}
              on my Kindle Paperwhite.
            </li>
            <li>
              Mechanical keyboards. I use a keyboard daily, so it makes sense
              for me to invest in tools that inspire me to use them more.
            </li>
            <li>
              Doing typing tests on{" "}
              <a
                href="https://monkeytype.com/profile/pzrsa"
                rel="prefetch noreferrer"
                target="_blank"
              >
                monkeytype
              </a>
              . My current personal record is 133wpm.
            </li>
            <li>
              Mechanical watches and G-Shock&apos;s. I own a Seiko{" "}
              <a
                href="https://wornandwound.com/review/seiko-5-snzg-review/"
                rel="prefetch noreferrer"
                target="_blank"
              >
                SNZG13K1
              </a>{" "}
              and a G-Shock{" "}
              <a
                href="https://www.casio.com/intl/watches/gshock/product.GA-B2100-1A1/"
                rel="prefetch noreferrer"
                target="_blank"
              >
                GA-B2100-1A1
              </a>
              . I love how boringly beautiful they are, which makes me feel good
              wearing them.
            </li>
            <li>
              Vi keybinds, I can&apos;t live without them as it simply makes
              interacting with the computer a joy.
            </li>
            <li>
              Consuming informational content at 2x speed.{" "}
              <a
                href="https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en"
                rel="prefetch noreferrer"
                target="_blank"
              >
                Video Speed Controller
              </a>{" "}
              has completely changed the way I watch videos. I of course watch
              movies and shows at normal speed, I&apos;m not a psycho.
            </li>
            <li>
              Building things from scratch (within my capabilities) before
              buying it. It&apos;s a nice feeling when something has your own
              battle scars from making some mistakes.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
