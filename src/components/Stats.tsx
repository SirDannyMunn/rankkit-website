import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

const stats = [
  { value: '10,000+', label: 'Active Clients' },
  { value: '500M+', label: 'Keywords Ranked' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$250M+', label: 'Revenue Generated' },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MjIzNDk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">
            Our Impact
          </Badge>
          <h2 className="mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We've helped thousands of businesses achieve their SEO goals and 
            dominate their industries online.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
