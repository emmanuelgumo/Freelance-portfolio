import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Zap, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emmanuelgumo767@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const articles = [
    {
      id: "tech",
      title: "The Future of Edge Computing",
      category: "Technology",
      icon: Zap,
      description: "Exploring how edge computing brings intelligence closer to the data source, revolutionizing IoT and AI applications.",
      excerpt: "Edge computing is rapidly transforming how data is processed, analyzed, and utilized. By moving computational power closer to the data source, it minimizes latency, conserves bandwidth, and enhances real-time decision-making.",
      content: `# The Future of Edge Computing: Bringing Intelligence Closer to the Source

## Introduction

Edge computing is rapidly transforming how data is processed, analyzed, and utilized. By moving computational power closer to the data source, it minimizes latency, conserves bandwidth, and enhances real-time decision-making. This paradigm shift is crucial for the proliferation of IoT devices, autonomous systems, and advanced AI applications, promising a more efficient and responsive digital infrastructure.

## What is Edge Computing?

At its core, edge computing involves processing data at the 'edge' of the network, rather than sending it to a centralized cloud or data center. This 'edge' can be any device or local network that generates or collects data, such as smart sensors, industrial machinery, or even a user's smartphone. The primary goal is to reduce the physical distance data must travel, thereby accelerating response times and improving overall system performance.

## Key Benefits of Edge Computing

1. **Reduced Latency:** Processing data locally means quicker insights and faster reactions, which is vital for applications like autonomous vehicles, remote surgery, and real-time industrial control systems.
2. **Bandwidth Optimization:** Instead of transmitting vast amounts of raw data to the cloud, only processed, relevant information is sent. This significantly reduces bandwidth consumption and associated costs.
3. **Enhanced Security and Privacy:** Local data processing can keep sensitive information within a defined perimeter, reducing exposure to cyber threats and aiding compliance with data privacy regulations.
4. **Improved Reliability:** Edge devices can operate autonomously even when connectivity to the central cloud is interrupted, ensuring continuous service and resilience.

## Conclusion

Edge computing is not just a technological trend; it's a fundamental shift in how we manage and interact with data.`,
    },
    {
      id: "lifestyle",
      title: "Mindful Mornings: 5 Simple Habits",
      category: "Lifestyle",
      icon: Heart,
      description: "Discover how to start your day with intention and self-care practices that enhance productivity and well-being.",
      excerpt: "How you begin your day often sets the tone for the hours that follow. By incorporating a few mindful habits into your morning routine, you can cultivate a sense of calm, focus, and productivity.",
      content: `# Mindful Mornings: 5 Simple Habits to Start Your Day Right

## Introduction

How you begin your day often sets the tone for the hours that follow. In our fast-paced world, it's easy to rush into the day feeling overwhelmed or uninspired. However, by incorporating a few mindful habits into your morning routine, you can cultivate a sense of calm, focus, and productivity that lasts throughout the day.

## 1. Hydrate Immediately

After hours of sleep, your body is naturally dehydrated. Before reaching for that first cup of coffee, try drinking a large glass of water, perhaps with a squeeze of lemon. This simple act rehydrates your system, kickstarts your metabolism, and can even aid in detoxification.

## 2. Practice Mindful Breathing or Meditation

Even five to ten minutes of mindful breathing or meditation can make a significant difference. Find a quiet spot, sit comfortably, and focus on your breath. This practice helps to calm the nervous system, reduce stress, and improve mental clarity.

## 3. Move Your Body Gently

You don't need an intense workout first thing in the morning. Gentle movement, such as stretching, a short walk, or a few yoga poses, can awaken your muscles, improve circulation, and release endorphins.

## 4. Set an Intention for the Day

Before diving into your to-do list, take a moment to set a positive intention for the day. This isn't about specific tasks, but rather about the quality of your day or how you want to show up.

## 5. Fuel Your Body with a Nutritious Breakfast

Skipping breakfast can lead to energy crashes and poor concentration later in the day. Opt for a balanced meal that includes protein, healthy fats, and complex carbohydrates.

## Conclusion

Starting your day with intention and self-care doesn't require a complete overhaul of your routine. Even small, consistent steps can lead to profound changes in your overall well-being and productivity.`,
    },
    {
      id: "health",
      title: "The Gut-Brain Axis Explained",
      category: "Health",
      icon: BookOpen,
      description: "Understanding how your digestive health profoundly influences your mental well-being and cognitive function.",
      excerpt: "Modern science is now providing concrete evidence for the intricate relationship between our gut and our mind, revealing a complex communication network known as the gut-brain axis.",
      content: `# The Gut-Brain Axis: How Your Digestive Health Impacts Your Mood

## Introduction

For centuries, the connection between our gut and our mind has been observed, often expressed through phrases like "gut feeling" or "butterflies in the stomach." Modern science is now providing concrete evidence for this intricate relationship, revealing a complex communication network known as the gut-brain axis.

## What is the Gut-Brain Axis?

The gut-brain axis is a bidirectional communication system that links the central nervous system (brain and spinal cord) with the enteric nervous system (ENS), often called the "second brain," which governs the gastrointestinal tract.

## Key Communication Pathways

1. **The Vagus Nerve:** This is the longest cranial nerve and acts as a direct highway between the brain and the gut, transmitting signals in both directions.
2. **Neurotransmitters:** The gut produces many of the same neurotransmitters found in the brain, including about 90% of the body's serotonin, a key mood regulator.
3. **Immune System:** The gut houses a large portion of the body's immune cells. Inflammation in the gut can trigger systemic inflammation, which has been linked to mood disorders.
4. **Gut Microbiome:** Trillions of microorganisms reside in our gut, collectively known as the gut microbiome.

## How Gut Health Influences Mood

An imbalance in the gut microbiome, often referred to as dysbiosis, can have far-reaching effects on mental health including anxiety, depression, and cognitive function.

## Conclusion

The gut-brain axis highlights the profound interconnectedness of our physical and mental health. By prioritizing gut health through diet and lifestyle choices, we can foster a thriving internal ecosystem that supports emotional balance and cognitive vitality.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Emmanuel Gumo Katama</h1>
              <p className="mt-1 text-slate-600">Freelance Content Writer | Tech • Lifestyle • Health</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">📧 emmanuelgumo767@gmail.com</p>
              <p className="text-sm text-slate-600">📍 Kenya</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">About Me</h2>
            <p className="mb-4 text-slate-700">
              As a software engineering student and self-employed cyber operator with 3 years of freelance experience, I specialize in crafting compelling content that drives engagement and conversions. My unique blend of technical expertise and creative writing skills allows me to develop data-driven content strategies across technology, lifestyle, and health sectors.
            </p>
            <p className="text-slate-700">
              I'm proficient in WordPress, HubSpot, SEMrush, and Google Analytics, enabling me to not only create engaging narratives but also analyze performance and optimize for measurable results.
            </p>
          </div>
        </section>

        {/* Work Examples */}
        <section>
          <h2 className="mb-8 text-2xl font-semibold text-slate-900">Work Examples</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {articles.map((article) => {
              const Icon = article.icon;
              const isExpanded = expandedArticle === article.id;

              return (
                <Card
                  key={article.id}
                  className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-900">{article.title}</CardTitle>
                        <CardDescription className="mt-1">{article.category}</CardDescription>
                      </div>
                      <Icon className="h-5 w-5 text-slate-600" />
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col pt-4">
                    <p className="mb-4 flex-1 text-sm text-slate-600">{article.description}</p>

                    {isExpanded && (
                      <div className="mb-4 max-h-64 overflow-y-auto rounded bg-slate-50 p-4 text-xs text-slate-700">
                        <div className="prose prose-sm max-w-none">
                          {article.content.split("\n").map((line, idx) => (
                            <p key={idx} className="mb-2">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
                      className="w-full"
                    >
                      {isExpanded ? "Hide Full Article" : "Read Full Article"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">Skills & Tools</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-slate-900">Content Writing</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Blog Posts & Articles</li>
                  <li>✓ Email Newsletters</li>
                  <li>✓ Website Copy</li>
                  <li>✓ SEO Writing</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-slate-900">Digital Marketing Tools</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ WordPress</li>
                  <li>✓ HubSpot</li>
                  <li>✓ SEMrush</li>
                  <li>✓ Google Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Work Together?</h2>
          <p className="mb-6 text-blue-100">
            I'm available for freelance writing projects in tech, lifestyle, and health sectors.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/emmanuel-gumo-b86397304/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 cursor-pointer border-none"
            >
              <Mail className="h-5 w-5" />
              {emailCopied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-600">
        <p>&copy; 2026 Emmanuel Gumo Katama. All rights reserved.</p>
      </footer>
    </div>
  );
}
