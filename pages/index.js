// pages/index.js
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '@/components/AboutUs';
import AboutFounder from '@/components/Aboutfounder';

const projects = [
  { title: 'Price Action', imgSrc: '/images/the-journey.jpg' },

 
];

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <AboutUs />
    <main className="p-10">
      <section id="projects" className="mt-2">
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
