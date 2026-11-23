import { useEffect, useState } from "react";
import {
  getCertifications,
  getProfile,
  getProjects,
  getStats,
  getTestimonials,
} from "./api/client";
import { Router, useRouter } from "./router";
import Loader from "./components/Loader";
import RouteProgressBar from "./components/RouteProgressBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Active Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

const MIN_LOADER_MS = 2400;

function MainView({
  profile,
  stats,
  projects,
  certifications,
  testimonials,
}) {
  const { path } = useRouter();

  const renderActivePage = () => {
    const current = path ? path.replace(/\/+$/, "") || "/" : "/";
    switch (current) {
      case "/about":
        return (
          <AboutPage
            profile={profile}
            stats={stats}
            testimonials={testimonials}
          />
        );
      case "/projects":
        return <ProjectsPage projects={projects} />;
      case "/qualifications":
      case "/certifications":
        return <CertificationsPage certifications={certifications} />;
      case "/contact":
        return <ContactPage profile={profile} />;
      case "/":
      default:
        return (
          <HomePage
            profile={profile}
            stats={stats}
            projects={projects}
          />
        );
    }
  };

  return (
    <>
      <Navbar name={profile?.name} />
      <main className="main-content">{renderActivePage()}</main>
      <Footer profile={profile} />
    </>
  );
}

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [stats, setStats] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [dataReady, setDataReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    Promise.all([
      getProfile(),
      getProjects(),
      getCertifications(),
      getTestimonials(),
      getStats(),
    ])
      .then(
        ([
          profileData,
          projectsData,
          certsData,
          testimonialsData,
          statsData,
        ]) => {
          setProfile(profileData);
          setProjects(projectsData);
          setCertifications(certsData);
          setTestimonials(testimonialsData);
          setStats(statsData);
          setDataReady(true);
        }
      )
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

  if (loadError) {
    return (
      <div className="load-error">
        <p>Error loading portfolio data: {loadError}</p>
      </div>
    );
  }

  return (
    <Router>
      <RouteProgressBar />
      {loaderMounted && <Loader leaving={ready} />}
      <MainView
        profile={profile}
        stats={stats}
        projects={projects}
        certifications={certifications}
        testimonials={testimonials}
      />
    </Router>
  );
}
