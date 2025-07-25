import React, { useEffect } from 'react'
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import Card from "~/components/Card";
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Your Resume’s Best Mate For Success!" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
      if(!auth.isAuthenticated) navigate('/auth?next=/');


  },[auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
 
    <section className="main-section">
      <div className='page-heading py-13'>
        <h1 className="animate-in slide-in-from-left duration-3000">Your Resume’s Best Mate For Success...</h1>
        <h2 className="animate-in slide-in-from-right duration-4000">Review Your Resumes And Get Instant Feedbacks!</h2>

      </div>

   

    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
 <ResumeCard key={resume.id} resume={resume} />
                 ))}
        </div>
    )}

</section>





  </main>;
}