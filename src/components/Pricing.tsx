import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: '$499',
    yearlyPrice: '$4,990',
    period: '/month',
    description: 'Perfect for small businesses getting started with SEO',
    features: [
      'Up to 25 keywords',
      'Monthly SEO audit',
      'Basic keyword research',
      'On-page optimization',
      'Monthly reporting',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    monthlyPrice: '$999',
    yearlyPrice: '$9,990',
    period: '/month',
    description: 'Ideal for growing businesses looking to scale',
    features: [
      'Up to 100 keywords',
      'Weekly SEO audit',
      'Advanced keyword research',
      'On-page & off-page SEO',
      'Content strategy',
      'Link building',
      'Weekly reporting',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$2,499',
    yearlyPrice: '$24,990',
    period: '/month',
    description: 'For large organizations requiring premium service',
    features: [
      'Unlimited keywords',
      'Daily SEO audit',
      'Comprehensive strategy',
      'Full-service SEO',
      'Content creation',
      'Advanced link building',
      'Technical SEO',
      'Custom reporting',
      'Dedicated account manager',
      '24/7 phone support',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Pricing Plans
          </Badge>
          <h2 className="text-gray-900 mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Flexible pricing options designed to fit your budget and business goals. 
            All plans include our core SEO features.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="billing-toggle" className="text-gray-600">
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-toggle" className="text-gray-600">
              Yearly
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                Save 17%
              </Badge>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? 'border-2 border-blue-600 shadow-xl'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-gray-900">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                {isYearly && (
                  <div className="text-sm text-green-600">
                    Billed annually
                  </div>
                )}
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? ''
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom plan? We can create a solution tailored to your specific needs.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
