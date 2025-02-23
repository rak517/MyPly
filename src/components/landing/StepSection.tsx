import { Step } from '@/components/landing/Step';
import { steps } from '@/data/steps';

export default function StepsSection() {
  return (
    <div className="-mx-4 bg-accent/30 px-4 py-24">
      <h2 className="mb-16 text-center text-4xl font-bold">이용방법</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        {steps.map((step, i) => (
          <Step key={step.number} {...step} index={i} />
        ))}
      </div>
    </div>
  );
}
