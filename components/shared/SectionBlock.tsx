interface SectionBlockProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionBlock({
  number,
  title,
  children,
  className = "",
}: SectionBlockProps) {
  return (
    <section
      className={`relative py-16 md:py-24 border-t border-black/10 dark:border-white/10 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 lg:gap-x-20">
        <div className="md:col-span-2 flex md:block items-center gap-4">
          <span className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a18] dark:text-[#d4f04a] select-none md:sticky md:top-32 leading-none">
            {number}
          </span>
        </div>

        <div className="md:col-span-10">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-[#1a1a18] dark:text-white leading-tight tracking-tight">
            {title}
          </h2>
          <div className="space-y-5 text-[#6b6860] dark:text-gray-400 text-base leading-relaxed max-w-2xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}