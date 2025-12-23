import { Clock4, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, MotionConfigProps } from "motion/react";

const animationProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    delay: 0.5, // Add a 0.5 second delay
    duration: 0.8,
    ease: "easeOut",
  },
  viewport: { once: true, amount: 0.3 }, // Animation plays once when 50% in vie
} as MotionConfigProps;

export default function About() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Africa/Johannesburg",
  });

  return (
    <section className="container mx-auto py-20 px-4" id="about">
      <motion.div {...animationProps}>
        <h2 className="text-slate-500 md:text-5xl text-4xl font-bold mb-10">
          About
        </h2>
      </motion.div>

      <div className="mb-10" style={{ maxWidth: "840px" }}>
        <motion.div {...animationProps}>
          <p className="mb-4">
            With over 8 years of experience in the web industry, I have built
            websites for global clients ranging from the model and talent
            industry, restaurants and agriculture.
          </p>
        </motion.div>

        <motion.div {...animationProps}>
          <p className="mb-4">
            I have built and worked on scalable web applications used by
            hundreds of users. With my main focus on React and Next.js, I am
            also currently diving into the world of React Native, building apps
            for customers. I take pride in my work, striving to deliver
            applications that are not only efficient, but also user-friendly.
          </p>
        </motion.div>

        <motion.div {...animationProps}>
          <p className="mb-4">
            My experience is not only limited to the frontend, but I also have
            knowledge about GraphQL APIs, PostgreSQL and services on AWS as well
            as Netlify as a deployment platform.
          </p>
        </motion.div>

        <motion.div {...animationProps}>
          <p className="mb-4">
            I am passionate about continuous learning and growth, both in my
            professional and personal life. I am enthusiastic about exploring
            new opportunities that challenge and expand my skillset. I strongly
            believe that ones imagination is limited by ones knowledge.
          </p>
        </motion.div>
      </div>

      <motion.div {...animationProps}>
        <div className="flex gap-2 items-center">
          <MapPin size={16} />
          <span>Cape Town, South Africa</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock4 size={16} />
          <span>Local time: {formattedTime}</span>
        </div>
      </motion.div>
    </section>
  );
}
