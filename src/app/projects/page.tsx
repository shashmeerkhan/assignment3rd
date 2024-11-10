// components/Projects.js
import Image, { StaticImageData } from 'next/image';
import coun from '../pictures/counter.png';
import blog from '../pictures/blog.png';
import pro from '../pictures/pro.png';

type ProjectData = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

const projects: ProjectData[] = [
  {
    title: 'Counter App',
    description: 'A simple counter  using HTML, CSS, and JavaScript.',
    image: coun,
    link: 'https://task-counter-five.vercel.app',
  },
  {
    title: 'Blog Website',
    description: 'A responsive blog website using HTML, CSS, and JavaScript.',
    image: blog,
    link: 'https://assignment4-ashen.vercel.app',
  },
  {
    title: 'Constructional Website',
    description: 'A constructional website project with project details.',
    image: pro,
    link: 'https://hackathon-sand-iota.vercel.app',
  },
];

export default function Projects() {
  return (
    <section className="py-10 px-4 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[var(--maincolor)] mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={project.image} alt={project.title} width={300} height={150} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-[var(--maincolor)] mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg transition hover:bg-[var(--maincolor)]"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
