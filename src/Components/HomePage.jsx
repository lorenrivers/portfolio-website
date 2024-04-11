import TeckStack from "./TechStack";
import ContactForm from "./ContactForm.jsx";
// import ProjectCarousel from "./ProjectCarousel.jsx";
import ProjectTiles from "./ProjectTiles.jsx";

export default function HomePage() {
  return (
    <div>
      <section className="h-5/6 sm:h-fit bg-teal-600 text-white ">
        {/* Intro Hero Section */}
        <div className="mt-36 p-10 sm:px-10 sm:pb-10 sm:pt-40">
          <h2 className="text-6xl font-extrabold font-roboto">Hi 👋</h2>
          <h2 className="text-5xl font-extrabold font-roboto">
            I&apos;m Loren, <span>a fullstack web developer</span>
          </h2>
        </div>
        <p className="px-10 p-10 font-bold font-roboto">
          Coding bootcamp graduate, with aspirations to one day work as a Junior
          Web Developer.
        </p>
      </section>

      <section className="h-5/6 sm:h-fit sm:pt-20">
        {/* About Section */}
        <p className="px-10 pt-10 text-justify font-roboto">
          Based in Cambridgeshire, I&apos;ve discovered a love for coding over
          the last year. My aspirations are to continue to develop my skills in
          this area and create professional web applications that have great
          user experiences.
        </p>
        <p className="px-10 py-5 text-justify font-roboto">
          When I&apos;m not coding, I enjoy sewing and would love to get back
          into learning dressmaking again! I&apos;m also a huge F1 fan and enjoy
          going to gym regularly.
        </p>
        <p className="px-10 py-5 font-roboto">
          My tech stack currently includes:
        </p>
        <TeckStack />
      </section>

      <section className="h-4/6 sm:h-fit pt-10 sm:px-10">
        {/* Project Overview Section */}
        <ProjectTiles />
      </section>

      <section className="h-5/6 sm:h-fit pt-10">
        {/* Contact Section */}
        <h2 className="px-10 text-3xl font-bold font-playfair-display text-teal-800">
          Contact Me
        </h2>
        <p className="px-10 py-5 text-justify font-roboto">
          I&apos;m happy to hear any feedback on my projects, or open to
          collaboration on work. Drop me a message below to chat!
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
