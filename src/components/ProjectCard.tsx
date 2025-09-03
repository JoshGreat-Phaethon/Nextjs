interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="bg-[#0e0e2e] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-pink-600/20">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <p className="text-pink-400 mt-3 text-sm">Teknologi: {tech}</p>
    </div>
  );
}
