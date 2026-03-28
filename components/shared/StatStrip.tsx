interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export default function StatStrip({ stats, className = "" }: StatStripProps) {
  return (
    <div
      className={`bg-[#d4f04a]/60 dark:bg-[#d4f04a]/20 border border-[#d4f04a] dark:border-[#d4f04a]/50 rounded-2xl px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-2xl md:text-3xl font-bold text-[#1a1a18] dark:text-white">
            {stat.value}
          </p>
          <p className="text-sm text-[#6b6860] dark:text-gray-400 mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}