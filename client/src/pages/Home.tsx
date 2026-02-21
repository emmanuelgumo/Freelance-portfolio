import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Zap, Mail, Linkedin, Quote } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emmanuelgumo767@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const testimonials = [
    {
      name: "Rosalid Mutitu",
      role: "Martinew Tech Founder",
      text: "Emmanuel's ability to explain complex edge computing concepts in simple terms is unmatched. Our blog engagement doubled after his first article!"
    },
    {
      name: "Dr Kombo Mruu",
      role: "Health & Wellness Coach",
      text: "The article on the gut-brain axis was exactly what my audience needed. Professional, well-researched, and delivered ahead of schedule."
    },
    {
      name: "Philip Kanyemi",
      role: "Lifestyle Magazine Editor",
      text: "A truly gifted writer. Emmanuel brings a unique perspective to every piece, making even the most common topics feel fresh and engaging."
    }
  ];

  const articles = [
    {
      id: "tech",
      title: "The Future of Edge Computing",
      category: "Technology",
      icon: Zap,
      description: "Exploring how edge computing brings intelligence closer to the data source, revolutionizing IoT and AI applications.",
      excerpt: "Edge computing is rapidly transforming how data is processed, analyzed, and utilized. By moving computational power closer to the data source, it minimizes latency, conserves bandwidth, and enhances real-time decision-making.",
      content: `# The Future of Edge Computing: Bringing Intelligence Closer to the Source\n\n## Introduction\n\nEdge computing is rapidly transforming how data is processed, analyzed, and utilized. By moving computational power closer to the data source, it minimizes latency, conserves bandwidth, and enhances real-time decision-making. This paradigm shift is crucial for the proliferation of IoT devices, autonomous systems, and advanced AI applications, promising a more efficient and responsive digital infrastructure.\n\n## What is Edge Computing?\n\nAt its core, edge computing involves processing data at the 'edge' of the network, rather than sending it to a centralized cloud or data center. This 'edge' can be any device or local network that generates or collects data, such as smart sensors, industrial machinery, or even a user's smartphone. The primary goal is to reduce the physical distance data must travel, thereby accelerating response times and improving overall system performance.\n\n## Key Benefits of Edge Computing\n\n1. **Reduced Latency:** Processing data locally means quicker insights and faster reactions, which is vital for applications like autonomous vehicles, remote surgery, and real-time industrial control systems.\n2. **Bandwidth Optimization:** Instead of transmitting vast amounts of raw data to the cloud, only processed, relevant information is sent. This significantly reduces bandwidth consumption and associated costs.\n3. **Enhanced Security and Privacy:** Local data processing can keep sensitive information within a defined perimeter, reducing exposure to cyber threats and aiding compliance with data privacy regulations.\n4. **Improved Reliability:** Edge devices can operate autonomously even when connectivity to the central cloud is interrupted, ensuring continuous service and resilience.\n\n## Conclusion\n\nEdge computing is not just a technological trend; it's a fundamental shift in how we manage and interact with data.`
    },
    {
      id: "lifestyle",
      title: "Mindful Mornings: 5 Simple Habits",
      category: "Lifestyle",
      icon: Heart,
      description: "Discover how to start your day with intention and self-care practices that enhance productivity and well-being.",
      excerpt: "How you begin your day often sets the tone for the hours that follow. By incorporating a few mindful habits into your morning routine, you can cultivate a sense of calm, focus, and productivity.",
      content: `# Mindful Mornings: 5 Simple Habits to Start Your Day Right\n\n## Introduction\n\nHow you begin your day often sets the tone for the hours that follow. In our fast-paced world, it's easy to rush into the day feeling overwhelmed or uninspired. However, by incorporating a few mindful habits into your morning routine, you can cultivate a sense of calm, focus, and productivity that lasts throughout the day.\n\n## 1. Wake Up Without Your Phone\n\nThe temptation to check emails or social media as soon as you wake up is strong, but it immediately puts your brain into a reactive state. Instead, give yourself at least 30 minutes of phone-free time to wake up naturally and set your own agenda for the day.\n\n## 2. Hydrate Before You Caffeine\n\nAfter hours of sleep, your body is naturally dehydrated. Drinking a large glass of water first thing in the morning can boost your energy levels, improve cognitive function, and kickstart your metabolism before you reach for that first cup of coffee.\n\n## 3. Practice Five Minutes of Stillness\n\nWhether it's meditation, deep breathing, or simply sitting quietly with your thoughts, a few minutes of stillness can significantly reduce stress and improve mental clarity. It allows you to check in with yourself before the demands of the outside world take over.\n\n## 4. Move Your Body\n\nYou don't need a full workout to reap the benefits of morning movement. A few gentle stretches, a short walk, or a quick yoga flow can increase blood flow, release endorphins, and wake up your muscles, leaving you feeling more energized and alert.\n\n## 5. Set One Clear Intention\n\nInstead of looking at a long to-do list, choose one primary intention or goal for the day. This provides focus and a sense of purpose, making it easier to prioritize your time and energy effectively.\n\n## Conclusion\n\nMindful mornings aren't about perfection; they're about progress. By choosing even one or two of these habits, you can transform your daily experience and approach your life with greater intention and joy.`
    },
    {
      id: "health",
      title: "The Gut-Brain Axis Explained",
      category: "Health",
      icon: BookOpen,
      description: "Understanding how your digestive health profoundly influences your mental well-being and cognitive function.",
      excerpt: "The connection between our gut and our brain is a fascinating area of modern science. Research increasingly shows that the health of our digestive system plays a crucial role in our mood, mental health, and overall brain function.",
      content: `# The Gut-Brain Axis: How Your Digestive Health Affects Your Mind\n\n## Introduction\n\nThe connection between our gut and our brain is a fascinating area of modern science. Research increasingly shows that the health of our digestive system plays a crucial role in our mood, mental health, and overall brain function. This bidirectional communication system, known as the gut-brain axis, highlights the importance of a holistic approach to health.\n\n## What is the Gut-Brain Axis?\n\nThe gut-brain axis is a complex communication network that links the enteric nervous system (the 'second brain' in your gut) with the central nervous system (your brain and spinal cord). This communication happens through various pathways, including the vagus nerve, the immune system, and biochemical signaling molecules like neurotransmitters.\n\n## The Role of the Microbiome\n\nCentral to the gut-brain axis is the gut microbiome—the trillions of bacteria and other microorganisms living in your digestive tract. These microbes produce many of the same neurotransmitters that your brain uses to regulate mood and cognition, such as serotonin and dopamine. In fact, about 95% of the body's serotonin is produced in the gut.\n\n## How Gut Health Impacts Mental Well-being\n\n1. **Mood Regulation:** An imbalanced gut microbiome (dysbiosis) has been linked to increased rates of anxiety and depression. Conversely, a healthy, diverse microbiome can promote emotional resilience and a more positive outlook.\n2. **Stress Response:** The gut-brain axis plays a key role in how we respond to stress. Chronic stress can negatively impact gut health, while a healthy gut can help dampen the body's physiological response to stress.\n3. **Cognitive Function:** Emerging research suggests that gut health may influence memory, focus, and even the risk of neurodegenerative diseases.\n\n## Tips for a Healthy Gut-Brain Connection\n\n* **Eat a Diverse Range of Whole Foods:** Focus on fiber-rich fruits, vegetables, and whole grains to feed your beneficial gut bacteria.\n* **Include Fermented Foods:** Foods like yogurt, kefir, sauerkraut, and kimchi provide natural probiotics.\n* **Manage Stress:** Practices like yoga, meditation, and adequate sleep are essential for both gut and brain health.\n* **Stay Hydrated:** Water is crucial for proper digestion and overall cellular function.\n\n## Conclusion\n\nTaking care of your gut is not just about digestion; it's about taking care of your mind. By nurturing your gut-brain axis through healthy lifestyle choices, you can support both your physical and mental well-being for years to come.`
    }
  ];

  const currentArticle = articles.find(a => a.id === expandedArticle);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header/Hero Section */}
      <header className="py-16 px-4 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Emmanuel Gumo Katama
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Freelance Content Writer | Tech • Lifestyle • Health
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>emmanuelgumo767@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">📍</span>
              <span>Kenya</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a software engineering student and self-employed cyber operator with 3 years of freelance experience, I specialize in crafting compelling content that drives engagement and conversions. My unique blend of technical expertise and creative writing skills allows me to develop data-driven content strategies across technology, lifestyle, and health sectors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm proficient in WordPress, HubSpot, SEMrush, and Google Analytics, enabling me to not only create engaging narratives but also analyze performance and optimize for measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Work Examples Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Work Examples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col h-full hover:shadow-md transition-shadow border-gray-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <article.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 mb-4">
                    {article.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setExpandedArticle(article.id)}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <Quote className="w-8 h-8 text-blue-100 absolute top-4 left-4" />
                <p className="text-gray-600 italic mb-6 relative z-10">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal/Overlay */}
      {expandedArticle && currentArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 md:p-10 relative">
            <button 
              onClick={() => setExpandedArticle(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Zap className="w-6 h-6 rotate-45" />
            </button>
            
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                {currentArticle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentArticle.title}</h2>
              <p className="text-xl text-gray-600 italic border-l-4 border-blue-100 pl-4">
                {currentArticle.excerpt}
              </p>
            </div>

            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
              {currentArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                if (paragraph.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                if (paragraph.startsWith('### ')) return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                if (paragraph.match(/^\d\. /)) {
                  return (
                    <ol key={idx} className="list-decimal pl-5 space-y-2 my-4">
                      {paragraph.split('\n').map((li, i) => (
                        <li key={i}>{li.replace(/^\d\. /, '')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith('* ')) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 my-4">
                      {paragraph.split('\n').map((li, i) => (
                        <li key={i}>{li.replace('* ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx} className="mb-4">{paragraph}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
              <Button onClick={() => setExpandedArticle(null)} size="lg">
                Close Article
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">Content Writing</h3>
              <ul className="space-y-3">
                {['Blog Posts & Articles', 'Email Newsletters', 'Website Copy', 'SEO Writing'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">Digital Marketing Tools</h3>
              <ul className="space-y-3">
                {['WordPress', 'HubSpot', 'SEMrush', 'Google Analytics'].map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-10">
            I'm available for freelance writing projects in tech, lifestyle, and health sectors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={copyEmail}
            >
              <Mail className="w-5 h-5" />
              {emailCopied ? "Email Copied!" : "Copy Email"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 text-center text-gray-500 text-sm">
        <p>© {new Date( ).getFullYear()} Emmanuel Gumo Katama. All rights reserved.</p>
      </footer>
    </div>
  );
}
