import { useEffect, useState } from "react";
import {
  getCertifications,
  getExperience,
  getProfile,
  getProjects,
  getSkills,
  getStats,
  getTestimonials,
} from "./api/client";
import ParticleNetwork from "./three/ParticleNetwork";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const MIN_LOADER_MS = 1600;

export default function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [experience, setExperience] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [stats, setStats] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [dataReady, setDataReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    Promise.all([
      getProfile(),
      getSkills(),
      getProjects(),
      getCertifications(),
      getExperience(),
      getTestimonials(),
      getStats(),
    ])
      .then(([profileData, skillsData, projectsData, certsData, experienceData, testimonialsData, statsData]) => {
        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
        setCertifications(certsData);
        setExperience(experienceData);
        setTestimonials(testimonialsData);
        setStats(statsData);
        setDataReady(true);
      })
      .catch((err) => {
        setLoadError(err.message);
        setDataReady(true);
      });

    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  const ready = dataReady && minTimeElapsed;

  useEffect(() => {
    if (!ready) return;
    const unmountTimer = setTimeout(() => setLoaderMounted(false), 600);
    return () => clearTimeout(unmountTimer);
  }, [ready]);

  useEffect(() => {
    if (profile?.name) {
      document.title = `${profile.name} — ${profile.title || "Portfolio"}`;
    }
  }, [profile]);

  if (loadError) {
    return (
      <div className="load-error">
        <p>Couldn't reach the backend API: {loadError}</p>
        <p>Make sure the Spring Boot backend is running on port 8080.</p>
      </div>
    );
  }

  return (
    <>
      {loaderMounted && <Loader leaving={ready} />}
      <ParticleNetwork />
      <Navbar name={profile?.name} />
      <main>
        <Hero profile={profile} stats={stats} />
        <About profile={profile} stats={stats} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Certifications certifications={certifications} />
        <Projects projects={projects} />
        <WhyHireMe profile={profile} testimonials={testimonials} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
