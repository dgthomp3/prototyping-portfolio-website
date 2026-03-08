import { Link } from 'react-router-dom';

export default function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <div className="project-card">
      <div onClick={onToggle} className='project-link' style={{ cursor: 'pointer' }}>
        <img src={project.image} alt={project.title} />
        <h3>
          {project.title}
          {project.capstone && <span className="capstone-badge">Capstone</span>}
        </h3>
        {!isOpen ?
          <span style={{ marginLeft: 'auto' }}>{'\u2304'}</span> :
          <span style={{ marginLeft: 'auto' }}>{'\u2303'}</span>
        }
      </div>

      {isOpen && (
        <div className="project-dropdown">
          <p>{project.description}</p>
          <Link 
            to={`/projects/${project.id}`} 
            className="project-link"
            onClick={() => window.scrollTo(0,0)}
          >
            View Full Details {'\u2192'}
          </Link>
        </div>
      )}
    </div>
  );
}
