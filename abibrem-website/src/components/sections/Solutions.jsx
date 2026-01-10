import { Zap, Wind, Battery, Droplets, ChevronRight } from 'lucide-react';
import { SOLUTIONS } from '../../constants';
import Card from '../common/Card';

const iconMap = {
  Zap,
  Droplets,
  Battery,
  Wind,
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 border-b-4 border-cyan-400 pb-6">
        OUR SOLUTIONS
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {SOLUTIONS.map((solution) => {
          const Icon = iconMap[solution.icon];
          return (
            <Card key={solution.id} hover>
              <div className="text-cyan-400 mb-4">
                <Icon size={48} />
              </div>
              <h3 className="text-2xl font-black tracking-wider mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {solution.desc}
              </p>
              <div className="flex items-center text-cyan-400 font-bold tracking-wider group-hover:gap-3 transition gap-2">
                LEARN MORE <ChevronRight size={20} />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}