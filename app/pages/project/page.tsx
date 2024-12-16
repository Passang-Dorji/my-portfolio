export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-500 to-orange-500  p-6">
      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          My Amazing Projects
        </h1>
        <p className="text-lg md:text-xl text-blue-600">
          Showcasing creativity and innovation through my work
        </p>
      </header>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                Project {index + 1}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                Project Title {index + 1}
              </h2>
              <p className="text-blue-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vehicula.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <footer className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Want to Collaborate?
        </h2>
        <p className="text-blue-600 mb-6">
          Feel free to reach out and let's create something amazing together!
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition">
          Contact Me
        </button>
      </footer>
    </div>
  );
}
