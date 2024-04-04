import TeckStack from "./TechStack";
import ContactForm from "./ContactForm.jsx";
import ProjectCarousel from "./ProjectCarousel.jsx";

export default function HomePage() {
  return (
    <div>
      <section className="h-svh">
        {/* Intro Hero Section */}
        <div className="mt-36 p-10">
          <h2 className="text-4xl font-extrabold">Hi 👋</h2>
          <h2 className="text-3xl font-extrabold">
            I&apos;m Loren, <span>a fullstack web developer</span>
          </h2>
        </div>
        <p className="px-10 pt-10 font-bold ">
          Coding bootcamp graduate, with aspirations to one day work as a Junior
          Web Developer.
        </p>
      </section>

      <section className="h-svh">
        {/* About Section */}
        <p className="px-10 py-5 text-justify">
          Based in Cambridgeshire, I&apos;ve discovered a love for coding over
          the last year. My aspirations are to continue to develop my skills in
          this area and create professional web applications that have great
          user experiences.
        </p>
        <p className="px-10 pb-5 text-justify">
          When I&apos;m not coding, I enjoy sewing and would love to get back
          into learning dressmaking again! I&apos;m also a huge F1 fan and enjoy
          going to gym regularly.
        </p>
        <p className="px-10 py-5">My tech stack currently includes:</p>
        <TeckStack />
      </section>

      <section className="h-svh">
        {/* Project Overview Section */}
        <ProjectCarousel />
      </section>

      <section className="h-svh">
        {/* Contact Section */}
        <h2 className="px-10 text-2xl font-bold">Contact Me</h2>
        <p className="px-10 py-5 text-justify">
          I&apos;m happy to hear any feedback on my projects, or open to
          collaboration on work. Drop me a message below to chat!
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
