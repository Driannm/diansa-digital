import FAQItem from "./FAQItem";

interface FAQEntry {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  items: FAQEntry[];
}

export default function FAQCategory({ title, items }: FAQCategoryProps) {
  return (
    <div className="mb-14">
      {/* Category title — konsisten dengan eyebrow style Diansa */}
      <div className="flex items-center gap-3 mb-2">
        <h2 className="font-display text-sm font-semibold text-[#6b6860] uppercase tracking-[0.15em]">
          {title}
        </h2>
      </div>

      {/* FAQ list */}
      <div className="border-t border-[#1a1a18]/8">
        {items.map((item, i) => (
          <FAQItem
            key={i}
            index={i}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}