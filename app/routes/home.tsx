import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumax" },
    { name: "description", content: "Maximize your resume to land your dream job" },
  ];
}
 
export default function Home() {
    const {auth} = usePuterStore();
    const navigate = useNavigate();
    

    useEffect( () => {
      if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]);

  return <main className ="bg-[url('/images/bg-main.svg')] bg-cover ">
  <Navbar/>
    <section className= "main-section">
      <div className="page-heading py-5">
        <h1>Track.Rate.Get Hired</h1>
        <h2>AI feedback that transforms Resumes into interview magnets</h2>
      </div>
      </section>


    {resumes.length > 0 &&(
      <div className="resumes-section">
      {resumes.map( resume => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
      
      </div>

)}
   
  </main>
}
