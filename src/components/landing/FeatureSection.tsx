import { Feature } from '@/components/landing/Feature';
import { features } from '@/data/features';

export default function FeaturesSection() {
  return (
    <div className="py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </div>
    </div>
  );
}
