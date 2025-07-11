// pages/index.js
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '@/components/AboutUs';
import AboutFounder from '@/components/Aboutfounder';

const projects = [
  { title: 'The Journey', imgSrc: '/images/the-journey.jpg' },
  { title: 'Urban Life', imgSrc: '/images/urban-life.jpg' },
  { title: 'The Stray', imgSrc: '/images/the-stray.jpg' },
];

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <AboutUs />
    <main className="p-10">
      <section id="projects" className="mt-10">
        <h2 className="text-3xl text-center mb-6">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <AboutFounder />
    </main>
    <Footer />
  </div>
);

export default Home;
