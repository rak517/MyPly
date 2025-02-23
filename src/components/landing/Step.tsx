interface StepProps {
  number: string;
  title: string;
  desc: string;
  index: number;
}

export function Step({ number, title, desc, index }: StepProps) {
  return (
    <div
      className="animate-fade-in relative rounded-lg bg-card bg-white p-6 opacity-0 shadow-sm"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="mb-4 bg-gradient-to-r from-[#E91E63] to-[#F06292] bg-clip-text text-3xl font-bold text-transparent">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
