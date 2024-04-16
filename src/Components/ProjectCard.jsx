export default function ProjectCard({
  title,
  url,
  gitHub,
  techStack,
  screenshot,
}) {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 mx-10 my-5 bg-gray-100 shadow rounded-lg">
      <img
        src={screenshot}
        alt="screenshot of the project webpage"
        width="300"
        className="sm:m-2"
      />
      <div className="flex-col p-2">
        <h2 className="text-xl sm:text-2xl font-bold font-roboto text-teal-700">
          {title}
        </h2>

        <h3 className="text-md">
          <span className="font-semibold">Live link to project:</span> {url}
        </h3>
        <h3 className="text-md">
          <span className="font-semibold">See the GitHub code:</span> {gitHub}
        </h3>
        <h3 className="text-md">
          <span className="font-semibold">Tech stack used:</span>
        </h3>
        <p>{techStack}</p>
      </div>
    </div>
  );
}
