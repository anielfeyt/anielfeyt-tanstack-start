import TextPressure from "@/components/TextPressure";

export default function Intro() {
  return (
    <div className="relative overflow-hidden">
      <section className="container mx-auto py-20 px-4 relative  md:h-screen flex items-center">
        <div className="flex gap-4 grow">
          <div className="md:w-1/2 flex items-center">
            <div>
              <div className="mb-20">
                <h1 className="text-slate-700  font-bold  mb-10 lg:text-8xl md:text-6xl sm:text-5xl text-5xl">
                  Hi, I'm Aniel
                </h1>
                <h2 className="mb-5">
                  <TextPressure
                    text="Full-Stack Developer"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={false}
                    weight={true}
                    italic={true}
                    textColor="#62748e"
                    strokeColor="#ff0000"
                    minFontSize={36}
                  />
                </h2>

                <p>
                  React & Next.js Web Developer building websites and scalable
                  web app solutions.
                </p>
              </div>

              <div className="flex content-start items-start gap-4">
                <a
                  href="https://www.linkedin.com/in/anielfeyt/"
                  target="_blank"
                  className="bg-slate-200 py-2 px-6 rounded-full ring-2 ring-slate-400 hover:bg-slate-400 hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/anielfeyt"
                  target="_blank"
                  className="bg-slate-200 py-2 px-6 rounded-full ring-2 ring-slate-400 hover:bg-slate-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2  justify-center hidden md:flex">
            <img
              src="/avatar.webp"
              //   src="/tanstack-circle-logo.png"
              alt="Aniel Feyt"
              className="block w-120 h-auto hover:rotate-3 hover:scale-105 transition-transform duration-500"
              style={{
                WebkitMaskImage: "url('/splat.png')",
                WebkitMaskSize: "contain",
                maskImage: "url('/splat.png')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
