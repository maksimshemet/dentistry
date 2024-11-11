import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const feedbacks = [
  {
    id: 1,
    name: "Марія К.",
    date: "2 тижні тому",
    rating: 5,
    text: "Дуже задоволена результатом! Лікар все детально пояснив та якісно виконав роботу. Зовсім не було боляче.",
    service: "Лікування карієсу"
  },
  {
    id: 2,
    name: "Олександр В.",
    date: "1 місяць тому",
    rating: 5,
    text: "Чудова клініка! Привітний персонал, сучасне обладнання. Особлива подяка за уважність до деталей.",
    service: "Професійна чистка"
  }
];

const Feedback = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center text-[#00bfff] mb-6">
        Відгуки наших клієнтів
      </h2>
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <Card key={feedback.id} className="bg-[#f8fdff] hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{feedback.name}</h3>
                  <p className="text-xs text-gray-500">{feedback.date}</p>
                </div>
                <div className="flex">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <span className="text-xs bg-[#e6f9ff] text-[#00bfff] px-2 py-1 rounded-full">
                  {feedback.service}
                </span>
              </div>
              <p className="text-sm text-gray-600">{feedback.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button 
          variant="outline"
          className="text-[#00bfff] border-[#00bfff] hover:bg-[#e6f9ff]"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Залишити відгук
        </Button>
      </div>
    </section>
  );
};

export default Feedback;