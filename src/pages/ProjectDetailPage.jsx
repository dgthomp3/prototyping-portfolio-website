import { useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';
import { Link } from 'react-router-dom';
import '../styling/ProjectDetailPage.css'

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <div className="not-found">Project not found</div>;

  return (
    <>
        <Link to="/" className="back-link">
            ← Back to Projects
        </Link>
        <div className="project-detail">
        {/* Hero Section */}
        <section className="hero">
            <h1>{project.title}</h1>
            <p className="description">{project.description}</p>
        </section>

        {/* Overview Section */}
        <section className="overview">
            <div className="overview-image">
            <img src={project.image} alt={project.title} />
            </div>
            <div className="overview-text">
            <p>{project.details}</p>
            </div>
        </section>

        {/* Accomplishments */}
        <section className="accomplishments">
            <h2>What I Accomplished</h2>
            <ul>
            {project.accomplishments.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>

            {project.pdf && (
                <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link"
                >
                    View Full Case Study (PDF)
                </a>
            )}

            {project.github && (
                <a
                    href={project.github}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="pdf-link"
                >
                    View GitHub Repository
                </a>
            )}

            {project.video && (
                <div className="video-container">
                    <video controls>
                        <source src={project.video} type="video/mp4" />
                    </video>
                </div>
            )}
        </section>
        </div>
    </>
  );
}
