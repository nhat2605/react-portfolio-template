import { Popover } from "@headlessui/react";
import Image from 'next/image'
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import { useTheme } from "next-themes";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { name, showBlog, showResume } = data;

  setTheme("light")

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md"
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={() => router.push("/playground")}>Playground</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("https://calendly.com/lamduynhatle")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  <Button onClick={() => router.push("/playground")}>Playground</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("https://calendly.com/lamduynhatle")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className="mt-10 hidden flex-row items-center justify-between sticky bg-white top-0 z-10 tablet:flex"
      >

        <div onClick={() => router.push("/")} className="cursor-pointer mob:p-2 laptop:p-0">
          <Image src="/images/nhatcodebase.svg" alt="NhatCodeBase" width={150} height={50} />
        </div>

        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={() => router.push("/playground")}>Playground</Button>

            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("https://calendly.com/lamduynhatle")}>
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("/playground")}>Playground</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("https://calendly.com/lamduynhatle")}>
              Contact
            </Button>
          </div>
        )}
      </div >
    </>
  );
};

export default Header;
