function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-3xl font-bold text-white">
          🤖 AI Resume Analyzer
        </h1>

        <div className="space-x-8 text-white font-medium">
          <a href="#" className="hover:text-yellow-300">
            Home
          </a>

          <a href="#" className="hover:text-yellow-300">
            Features
          </a>

          <a href="#" className="hover:text-yellow-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;