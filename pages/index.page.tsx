import { ConnectWallet } from "@3rdweb/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Section from ".././src/components/landing/section";
import useDarkMode from "../src/hooks/useDarkMode";

const LandingPage: NextPage = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="dark:bg-zinc-900">
      <Head>
        <title>Audify</title>
        <meta name="description" content="Audiobooks" />
      </Head>

      <div className="w-full h-20">
        <div className="flex items-center justify-between w-full h-full px-8 m-auto max-w-7xl">
          <Link href="/" passHref>
            <a
              className="text-5xl font-semibold glowing-text"
              style={{ fontFamily: "Cookie, cursive" }}
            >
              Audify
            </a>
          </Link>
          <div className="flex space-x-5 items-center">
            <div>
              {colorTheme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setTheme("light")}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 rounded-full cursor-pointer text-white hover:bg-zinc-200/10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setTheme("dark")}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-zinc-800/10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </div>
            <ConnectWallet />
          </div>
        </div>
      </div>
      <div className="w-full px-8 m-auto max-w-7xl">
        <div className="w-full py-24 mb-24">
          <div className="flex flex-col items-start max-w-4xl m-auto">
            <p
              className="flex flex-col items-start mb-16 font-extrabold tracking-tight uppercase text-8xl glowing-text"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span>Experience</span>
              <span>Premium</span>
              <span>Listening</span>
            </p>
            <Link href="/explore" passHref>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 border-pink-500 border rounded-lg hover:scale-105 shadow-lg shadow-indigo-500/60 backdrop-blur-xl transition-transform">
                <span
                  className="px-10 py-4 text-xl font-semibold tracking-normal uppercase transition-all duration-75 ease-in group-hover:bg-opacity-0 glowing-text"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Explore
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-32">
          <Section
            image={"/images/audiobook.svg"}
            sectionHeading="Play from massive library."
            textContent="Listen to the audiobooks you love, and discover more from hand-picked collection."
          />
          <Section
            image={"/images/book-lover.svg"}
            sectionHeading="Books that expands perspective."
            textContent="Books open a door for us. Read the books you love from different categories like business, finance, productivity, etc."
            imagePosition="right"
          />
          <Section
            image={"/images/gift-to-love.svg"}
            sectionHeading="Sharing is Caring."
            textContent="Gift your favorite book to your loved ones."
          />
        </div>
      </div>
      <div className="grid w-full h-32 mt-16 text-xl font-bold text-gray-800 dark:text-zinc-200 glowing-text place-content-center"
        style={{
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <p>Powered by ThirdWeb 🚀 </p>
      </div>
    </div>
  );
};

export default LandingPage;