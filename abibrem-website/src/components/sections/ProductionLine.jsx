import { PRODUCTION_STEPS } from '../../constants';
import Card from '../common/Card';

export default function ProductionLine() {
  return (
    <section id="technology" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 border-b-4 border-cyan-400 pb-6">
        24-HOUR PRODUCTION LINE
      </h2>

      <div className="space-y-4">
        {PRODUCTION_STEPS.map((process) => (
          <Card key={process.step} hover>
            <div className="flex gap-6">
              <div className="text-4xl font-black text-cyan-400">
                {process.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black tracking-wider mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {process.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}