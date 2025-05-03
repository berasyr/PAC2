import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const [showSurveyAlert, setShowSurveyAlert] = useState(false);

  const handleSurveyClick = () => {
    setShowSurveyAlert(true);
    setTimeout(() => setShowSurveyAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Pace | Platform for People Who Move</title>
        <meta name="description" content="Track your steps, earn rewards, and join a community built for people who keep moving." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-pace-red">PACE</div>
          <button 
            onClick={() => document.getElementById('survey').scrollIntoView({ behavior: 'smooth' })}
            className="bg-pace-red hover:bg-pace-red-dark text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            Take the Survey
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Built for the Ones <br className="hidden md:block" /> Who Keep Moving.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Track your steps. Stream your walks. Earn rewards. Join a community built for people who grind every day.
          </p>
          <button 
            className="bg-pace-red hover:bg-pace-red-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            onClick={() => document.getElementById('survey').scrollIntoView({ behavior: 'smooth' })}
          >
            Take the Survey
          </button>

          {/* App Preview Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Live Walk", points: "+1200 Points Today", friends: "3 Friends Joined" },
              { title: "Stream or Upload Walks", points: "7 Day Streak!", friends: "Share highlights" },
              { title: "Create a community", points: "200k Steps Goal", friends: "Celebrate your community goals " }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-pace-red font-bold text-lg mb-2">{card.title}</div>
                <div className="font-semibold text-gray-800 mb-2">{card.points}</div>
                <div className="text-gray-500">{card.friends}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Pace? Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-start">
              <div className="text-pace-red mr-4 text-3xl">•</div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What is Pace?</h2>
                <p className="text-gray-600">
                  Pace is a platform that pays people for doing what they already do every day — walk. You move, we track your steps, and you earn real cash payouts based on your Pace Points. No complicated rules. No fake coins. Just actual money.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-pace-red mr-4 text-3xl">•</div>
              <div>
                <h2 className="text-2xl font-bold mb-3">How It Works</h2>
                <p className="text-gray-600">
                  But Pace isn't about rewards — it's about building a movement. You can stream your walks, connect with friends, and create a daily routine that earns while it motivates. Whether you're walking to class and work, looping the campus quad, or hitting the gym, your steps count — and your consistency gets paid.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-pace-red mr-4 text-3xl">•</div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Why It Matters</h2>
                <p className="text-gray-600">
                  No subscriptions. No complicated rules. Just steps that turn into rewards and a space where consistency gets recognized. Built for the ones who keep moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="survey" className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-2">⚡</span>
            <h2 className="text-4xl font-bold">Pace is launching soon.</h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            We're looking for people to help shape the future of the app.
          </p>
          
          {/* Typeform Embed */}
          <div className="mt-10 w-full h-[500px]">
            <div data-tf-live="01JTA22ZAHQJKYFWDS6ZCVMH1T"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-pace-red text-white">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Pace. For people who keep moving.</p>
        </div>
      </footer>

      {/* Typeform Script */}
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade {
          animation: fade 3s ease-in-out;
        }
      `}</style>
    </div>
  );
} 