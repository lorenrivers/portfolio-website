import TeckStack from "./TechStack";
import ContactForm from "./ContactForm.jsx";

export default function HomePage() {
  return (
    <div>
      <section>
        {/* Intro Hero Section */}
        <div className="mt-36 p-10">
          <h2 className="text-4xl">Hi 👋</h2>
          <h2 className="text-3xl">
            I&apos;m Loren, a fullstack web developer
          </h2>
        </div>
        <p className="p-10">
          Coding bootcamp graduate, with aspirations to one day work as a Junior
          Web Developer.
        </p>
      </section>

      <section>
        {/* About Section */}
        <p className="px-10 pt-20 pb-5">
          Based in Cambridgeshire, I&apos;ve discovered a love for coding over
          the last year. My aspirations are to continue to develop my skills in
          this area and create professional web applications that have great
          user experiences.
        </p>
        <p className="px-10 pb-5">
          When I&apos;m not coding, I enjoy sewing and would love to get back
          into learning dressmaking again! I&apos;m also a huge F1 fan and enjoy
          going to gym regularly.
        </p>
        <p className="px-10 py-5">My tech stack currently includes:</p>
        <TeckStack />
      </section>

      <section>{/* Project Overview Section */}</section>

      <section>
        {/* Contact Section */}
        <h2 className="px-10 pt-10">Contact Me</h2>
        <p className="px-10 py-5">
          I&apos;m happy to hear any feedback on my projects, or open to
          collaboration on work. Drop me a message below to chat!
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
