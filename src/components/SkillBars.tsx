interface SkillBarProps {
  title: string;
  level: number;
  color: string;
}

export default function SkillBar({ title, level, color }: SkillBarProps) {
  return (
    <div className="bg-[#0e0e2e] p-5 rounded-xl shadow-lg border border-pink-600/20">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full bg-${color}-500`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p className="text-gray-400 mt-2">{level}%</p>
    </div>
  );
}
