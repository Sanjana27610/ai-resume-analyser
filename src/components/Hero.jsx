function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          AI Resume Analyzer 🚀
        </h1>

        <p className="text-xl mb-8">
          Upload your resume and get an AI-powered ATS score,
          resume score, skill analysis, keyword suggestions,
          and personalized improvement tips.
        </p>

        <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
