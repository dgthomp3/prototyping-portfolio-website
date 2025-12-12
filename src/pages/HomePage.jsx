import Bio from '../components/Bio';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';

export default function HomePage() {
  const softwareProjects = projectData
    .filter(p => p.category === 'Software')
    .sort((a, b) => (b.capstone ? 1 : 0) - (a.capstone ? 1 : 0));
  const prototypeProjects = projectData.filter(p => p.category === 'Prototype');

  return (
    <>
      <Bio />

      <section className="px-4 mt-10">
        <h2 className="text-xl font-semibold text-accent border-b-2 border-accent pb-1 mb-4">
          Software Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="px-4 mt-12">
        <h2 className="text-xl font-semibold text-accent border-b-2 border-accent pb-1 mb-4">
          Prototypes
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {prototypeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}