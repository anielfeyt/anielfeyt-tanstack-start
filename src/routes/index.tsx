import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="grid min-h-dvh grid-cols-[12px_auto_12px] sm:grid-cols-[50px_auto_50px] grid-rows-[1fr_1px_auto_1px_auto] overflow-hidden">
      <div className="border-x border-x-slate-200 bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>

      <div className=" ">
        <section id="intro" className="mt-10 md:mt-20">
          <div className="grow flex flex-col lg:flex-row relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw]  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
            <div className="border border-x-0 lg:border-r border-slate-200 w-full h-auto lg:w-[600px] z-10 mx-auto">
              <img
                src="/avatar.jpg"
                alt="Image of Aniel Feyt"
                width={300}
                height={300}
                className="object-cover mx-auto w-full h-auto max-w-[600px] "
              />
            </div>
            <div className="w-full">
              <div className="relative grid lg:grid-cols-[50px_auto] h-full">
                <div className="hidden lg:block relative before:absolute before:h-full before:w-px before:bg-slate-200 before:right-0 bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>

                <div className="flex flex-col">
                  <h1 className="relative p-4 text-4xl sm:text-6xl lg:text-7xl  font-semibold tracking-widest uppercase text-slate-500 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] ">
                    Aniel Feyt.
                  </h1>
                  <h2 className="relative p-4 text-2xl md:text-4xl font-semibold tracking-widest uppercase text-slate-400 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                    Web developer.
                  </h2>
                  <p className=" relative p-4 text-lg  text-slate-500 grow max-w-[1000px]">
                    Intermediate Web Developer based in Cape Town, South Africa.
                    In this never ending journey of learning web technologies, I
                    mostly specialize in ReactJS. I have experience in building
                    web applications and websites using Next.js. I also have
                    experience using Tailwind CSS, MUI, TypeScript, GraphQL, and
                    Node.js. For deployment, I mostly use Netlify and AWS
                    services. I'm currently working on improving my React Native
                    skills.
                  </p>
                  <div className="relative text-lg text-slate-500 flex flex-wrap flex-col min-[500px]:flex-row before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw]  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
                    <a
                      className="p-4 min-[500px]:border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors border-b min-[500px]:border-b-0 bg-white"
                      href="https://github.com/anielfeyt"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      className="p-4 min-[500px]:border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors border-b min-[500px]:border-b-0 bg-white"
                      href="https://www.linkedin.com/in/aniel-feyt/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="p-4 min-[500px]:border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors border-b min-[500px]:border-b-0 bg-white"
                      href="https://www.instagram.com/anielfeyt/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                    <a
                      className="p-4 min-[500px]:border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors bg-white"
                      href="https://www.facebook.com/anielfeyt/"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] mt-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]"
        >
          <div>
            <h2 className="p-4 text-3xl md:text-6xl font-bold tracking-widest uppercase text-slate-500">
              Experience.
            </h2>

            <div className=" text-xl text-slate-500 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw]  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
              <div className="relative flex after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                <span className="font-bold text-slate-400 p-4 w-[65px] border-r border-slate-200 flex-none">
                  01.
                </span>
                <p className="p-4">
                  Building websites and web apps using ReactJS and Next.js.
                </p>
              </div>
              <div className="relative flex  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                <span className="font-bold text-slate-500 p-4 w-[65px] border-r border-slate-200 flex-none">
                  02.
                </span>
                <p className="p-4">
                  Deploying and managing projects on Netlify.
                </p>
              </div>
              <div className="relative flex  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                <span className="font-bold text-slate-400 p-4 w-[65px] border-r border-slate-200 flex-none">
                  03.
                </span>
                <p className="p-4">
                  Setting up services and infrastructure like lambdas, S3 and
                  EC2 instances on AWS.
                </p>
              </div>
              <div className="relative flex  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                <span className="font-bold text-slate-500 p-4 w-[65px] border-r border-slate-200 flex-none">
                  04.
                </span>
                <p className="p-4">
                  Creating basic APIs in Node.js and using Apollo for GraphQL.
                </p>
              </div>
              <div className="relative flex after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]">
                <span className="font-bold text-slate-400 p-4 w-[65px] border-r border-slate-200 flex-none">
                  05.
                </span>
                <p className="p-4">
                  Working with databases like PostgreSQL, MongoDB, and Firebase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="technologies"
          className="relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] mt-20 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw]"
        >
          <h2 className="p-4 text-3xl md:text-6xl font-bold tracking-widest uppercase text-slate-500">
            Technologies.
          </h2>

          <div className="text-lg text-slate-500 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw]  after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] ">
            <div className="flex flex-wrap relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
              <div className="font-bold p-4 border-r border-slate-200  bg-slate-200 w-full lg:w-[200px]">
                Frontend
              </div>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                ReactJS
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Next.js
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Tailwind CSS
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                MUI
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                TypeScript
              </span>
            </div>

            <div className="flex flex-wrap mt-8 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
              <div className="font-bold p-4 border-r border-slate-200  bg-slate-200 w-full lg:w-[200px]">
                Backend
              </div>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                GraphQL
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Node.js
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Express.js
              </span>
            </div>

            <div className="flex flex-wrap mt-8 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
              <div className="font-bold p-4 border-r border-slate-200 bg-slate-200 w-full lg:w-[200px]">
                Services
              </div>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Netlify
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                AWS
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Supabase
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Google
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Apollo Studio
              </span>
            </div>

            <div className="flex flex-wrap mt-8 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw] after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:bg-slate-200 after:w-[200vw] bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
              <div className="font-bold p-4 border-r border-slate-200 bg-slate-200 w-full lg:w-[200px]">
                Databases
              </div>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                PostgreSQL
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                MongoDB
              </span>
              <span className="p-4 sm:border-r border-slate-200 bg-white w-full sm:w-auto">
                Firebase
              </span>
            </div>
          </div>
        </section>

        <footer className="mt-40 p-4 text-center text-slate-500 relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:bg-slate-200 before:w-[200vw]">
          &copy; {new Date().getFullYear()} Aniel Feyt. All rights reserved.
        </footer>
      </div>

      <div className=" border-x border-x-slate-200 bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    </div>
  );
}
