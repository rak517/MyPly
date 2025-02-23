import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#E91E63] to-[#F06292] opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
      <div className="relative space-y-4 rounded-lg bg-card bg-white p-8 transition duration-200 hover:shadow-xl">
        <div className="inline-block rounded-lg bg-[#E91E63]/10 p-3">
          <Icon className="h-6 w-6 text-[#E91E63]" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
