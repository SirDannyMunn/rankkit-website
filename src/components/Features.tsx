import { Check, Shield, Rocket, Users, Award, Clock } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Shield,
    title: 'White-Hat Techniques',
    description: 'Only ethical, Google-approved SEO strategies that protect your brand.',
  },
  {
    icon: Rocket,
    title: 'Fast Results',
    description: 'See measurable improvements in rankings within 30-90 days.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Expert SEO specialists assigned to your account for personalized service.',
  },
  {
    icon: Award,
    title: 'Proven Success',
    description: '10+ years of experience with hundreds of successful campaigns.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock tracking and optimization of your SEO performance.',
  },
];

const stats = [
  { label: 'Client Retention', value: 95 },
  { label: 'Campaign Success', value: 98 },
  { label: 'On-Time Delivery', value: 100 },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIyNzk1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Digital Marketing Team"
              className="rounded-2xl shadow-xl w-full"
            />
            <Card className="absolute -bottom-6 -right-6 shadow-lg max-w-xs">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">2,500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="text-gray-900">{stat.value}%</span>
                      </div>
                      <Progress value={stat.value} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Why Choose Us
            </Badge>
            <h2 className="text-gray-900 mb-6">
              The RankKit Advantage
            </h2>
            <p className="text-gray-600 mb-8">
              We combine cutting-edge AI technology with proven SEO expertise to deliver 
              results that matter. Our data-driven approach ensures every campaign is 
              optimized for maximum impact.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
