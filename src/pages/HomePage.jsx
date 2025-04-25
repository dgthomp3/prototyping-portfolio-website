import Bio from '../components/Bio';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';

export default function HomePage() {
    return (
        <>
            <Bio />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                {projectData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
