import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResumeUpload from "../components/ResumeUpload";
import ResultCard from "../components/ResultCard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResumeUpload />
      <ResultCard />
    </>
  );
}

export default Home;