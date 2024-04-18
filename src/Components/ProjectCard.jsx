export default function ProjectCard({
  title,
  url,
  gitHub,
  techStack,
  screenshot,
}) {
  const techStackArray = techStack.map((tech) => <li key={tech.id}>{tech}</li>);

  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 mx-10 my-5 bg-gray-100 shadow rounded-lg">
      <img
        src={screenshot}
        alt="screenshot of the project webpage"
        width="300"
        className="m-2"
      />

      <div className="flex-col p-2 mx-2 mb-2">
        <h2 className="text-2xl sm:text-2xl font-bold font-roboto text-teal-700 ml-2 mb-2 sm:mb-1 sm:mt-2">
          {title}
        </h2>

        <a href={url}>
          <button className="bg-teal-950 text-white p-4 m-2 w-fit self-center rounded-xl hover:bg-teal-950/75">
            Link link to project
          </button>
        </a>

        <a href={gitHub}>
          <button className="bg-teal-950 text-white p-4 m-2 w-fit self-center rounded-xl hover:bg-teal-950/75">
            See the GitHub code
          </button>
        </a>

        <h3 className="text-xl font-semibold ml-2 my-2">Tech stack used:</h3>
        <ul className="ml-2">{techStackArray}</ul>
      </div>
    </div>
  );
}
