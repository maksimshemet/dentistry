import React from 'react'
import { Shield, Trophy, Award } from 'lucide-react'

const indicators = [
  {
    icon: Shield,
    text: 'Сертифікована клініка',
    description: 'Всі необхідні ліцензії та дозволи'
  },
  {
    icon: Trophy,
    text: '15+ років досвіду',
    description: 'Професійна команда лікарів'
  },
  {
    icon: Award,
    text: '1000+ задоволених клієнтів',
    description: 'Підтверджені відгуки'
  }
]

const TrustIndicators = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 px-4 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <div 
                key={index} 
                className="flex items-center p-4 bg-white/80 backdrop-blur rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{indicator.text}</h3>
                  <p className="text-sm text-gray-600 mt-1">{indicator.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators