import { motion } from "motion/react";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MUI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Netlify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  //   {
  //     name: "Vercel",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  //   },
  {
    name: "Jira",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  },
  {
    name: "Bitbucket",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

function TechnologyCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-200 ring-2 ring-slate-400 hover:bg-slate-400 hover:text-white transition hover:scale-110 ">
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-2"
      />
      <h3 className="text-center text-lg font-medium">{name}</h3>
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="container mx-auto py-20 px-4" id="technologies">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5, // Add a 0.5 second delay
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }} // Animation plays once when 50% in vie
      >
        <h2 className="text-slate-500 md:text-5xl text-4xl font-bold mb-20">
          Technologies
        </h2>
      </motion.div>

      <div className="grid lg:gap-6 gap-3 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 ">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + index * 0.1, // Staggered delay for each card
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }} // Animation plays once when 50% in vie
          >
            <TechnologyCard name={tech.name} logo={tech.logo} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
