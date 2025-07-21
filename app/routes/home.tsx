import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Your Resume’s Best Mate For Success!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className='main-section'>
      <div className='page-heading'>
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your Submissions And Get Instant Feedbacks!</h2>

      </div>

    </section>

    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (

                <ResumeCard key={resume.id} resume={resume} />

          ))}
        </div>
    )}



  </main>;
}
