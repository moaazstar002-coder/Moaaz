import { motion } from "framer-motion";
import gamersNestImg from "../assets/GEMR'S NEST .png";
import eduVerseImg from "../assets/courses.png";
import pmImg from "../assets/PM.png";
import taskManagerImg from "../assets/todo.png";
import landingImg from "../assets/landing.png";
import animeImg from "../assets/anime.png";
import "../styles/projects.css";

function Projects({ id }) {
  const projects = [
    {
      id: 1,
      title: "GAMER's NEST",
      description: "GAMERs social media platform with a sleek and engaging user interface",
      tags: [
        "React",
        "Redux/Context",
        "RESTful APIs",
        "Tailwind CSS",
        "React Router"
      ],
      link: "https://gamersnest-v01.netlify.app/",
      icon: "fa-gamepad",
      image: gamersNestImg
    },
    {
      id: 2,
      title: "EduVerse",
      description: "Educational platform with interactive learning modules",
      tags: ["React", "JavaScript", "CSS", "APIs"],
      link: "https://eduverse02.netlify.app/",
      icon: "fa-graduation-cap",
      image: eduVerseImg
    },
    {
      id: 3,
      title: "Products Manager",
      description: "Inventory management system with real-time updates",
      tags: ["JavaScript", "CSS", "React"],
      link: "https://products-manger-02.netlify.app",
      icon: "fa-box",
      image: pmImg
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Productive task management application",
      tags: ["React", "LocalStorage", "UI/UX"],
      link: "https://task-manager-0-2.netlify.app",
      icon: "fa-tasks",
      image: taskManagerImg
    },
    {
      id: 5,
      title: "Landing Page",
      description: "Modern landing page with smooth animations",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://landing-page-002.netlify.app",
      icon: "fa-rocket",
      image: landingImg
    },
    {
      id: 6,
      title: "Anime Hub",
      description: "Anime database with search and filtering features",
      tags: ["React", "APIs", "JavaScript"],
      link: "https://anime-02.netlify.app/",
      icon: "fa-film",
      image: animeImg
    },
    {
      id: 7,
      title: "Moodify",
      description: "Mood-based music recommendation app",
      tags: ["React", "Web API", "Design"],
      link: "https://moodify-appv-0.netlify.app/",
      icon: "fa-music",
      image: ""
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageHoverVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      y: 50, 
      rotate: -10,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 0, 
      scale: 0.5, 
      y: 50, 
      rotate: -10,
      filter: "blur(10px)"
    },
    hover: { 
      opacity: 1, 
      scale: 1.1, 
      y: 0,
      x: 0,
      rotate: 5,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section id={id} className="projects">
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        Featured Projects
      </motion.h3>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Main card hover animation using Framer Motion instead of inline to coordinate with children */}
            <motion.div
              className="project-card-bg-layer"
              variants={{
                hover: {
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 240, 255, 0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }
              }}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                zIndex: -1,
                borderRadius: '20px'
              }}
            />

            {/* Floating Image on Hover */}
            {project.image && (
              <motion.div 
                className="hover-reveal-image"
                variants={imageHoverVariants}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
            )}

            <div className="project-header">
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h4>{project.title}</h4>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <span className="visit-link">
                View Project <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
