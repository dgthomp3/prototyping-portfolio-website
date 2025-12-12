import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`} className="project-link">
        <img src={project.image} alt={project.title} />
        <h3>
          {project.title}
          {project.capstone && <span className="capstone-badge">Capstone</span>}
        </h3>
      </Link>
    </div>
  );
}
