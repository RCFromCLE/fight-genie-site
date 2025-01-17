import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsofService from './pages/TermsofService.jsx';
import {
  Brain,
  Bot,
  ArrowRight,
  BookOpen,
  Twitter,
} from "lucide-react";

const CONFIG = {
  social: {
    twitter: "https://x.com/Fight_Genie",
    blog: "https://rudycorradetti.com/2024/12/04/fight-genie-ai-nodejs-discord-bot-ufc-predictions/",
  },
  stats: {
    gpt: {
      name: "GPT-4o",
      wins: 51,
      totalFights: 83,
      winRate: 61.4,
    },
    claude: {
      name: "Claude-3.5",
      wins: 53,
      totalFights: 82,
      winRate: 64.6,
    },
  },
  links: {
    discordInvite: "https://discord.com/oauth2/authorize?client_id=1297251219374604388",
    logo: "/FightGenie_Logo_1.PNG",
  },
};

const COMMANDS = [
  {
    command: "$upcoming",
    description: "Display next UFC event details, predictions, and analysis",
    emoji: "🎯",
    category: "Core",
  },
  {
    command: "$model",
    description: "Switch between GPT-4 and Claude prediction models",
    emoji: "🤖",
    category: "Analysis",
  },
  {
    command: "$stats",
    description: "View Fight Genie prediction accuracy and performance",
    emoji: "📊",
    category: "Analysis",
  },
  {
    command: "$checkstats",
    description: "View or update detailed fighter statistics",
    emoji: "👤",
    category: "Analysis",
  },
];

const App = () => {
  return (
    <div className="relative">
      <style>{`
        @keyframes heroShine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes octoSpin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .hero-gradient {
          background: linear-gradient(
            270deg,
            #ff0000,
            #ff00ff,
            #0000ff,
            #ff0000
          );
          background-size: 200% auto;
          animation: heroShine 6s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .octagon-arena {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 1000px;
          background: conic-gradient(
            from 0deg,
            rgba(255,0,0,0.1),
            rgba(0,0,255,0.1),
            rgba(255,0,0,0.1)
          );
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          animation: pulse 4s ease-in-out infinite;
        }

        .octagon-border {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1200px;
          height: 1200px;
          border: 2px solid rgba(255,255,255,0.1);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          animation: octoSpin 20s linear infinite;
        }

        .energy-field {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0,0,255,0.1) 0%, transparent 50%);
          animation: pulse 6s ease-in-out infinite alternate;
        }

        .cage-texture {
          position: fixed;
          inset: 0;
          background-image: 
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 30px
            );
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255,255,255,0.1),
            transparent
          );
          animation: shimmer 2s infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover::after {
          opacity: 1;
        }

        .stats-card {
          background: linear-gradient(
            135deg,
            rgba(23,23,23,0.95),
            rgba(38,38,38,0.95)
          );
          box-shadow: 
            0 0 20px rgba(0,0,0,0.3),
            inset 0 0 20px rgba(255,255,255,0.05);
        }

        .command-card {
          background: rgba(23,23,23,0.95);
          box-shadow: 
            0 0 15px rgba(0,0,0,0.2),
            inset 0 0 10px rgba(255,255,255,0.03);
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .command-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 10px 20px rgba(0,0,0,0.3),
            inset 0 0 15px rgba(255,255,255,0.05);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(255,0,0,0.2),
            rgba(0,0,255,0.2)
          );
          z-index: -1;
          transition: all 0.3s ease;
        }

        .cta-button:hover::before {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .cta-button:active {
          transform: scale(0.98);
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #ff0000, #0000ff);
          z-index: -1;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-effect:hover::before {
          opacity: 0.5;
        }

        @media (prefers-reduced-motion) {
          .float-animation,
          .octagon-arena,
          .octagon-border,
          .energy-field,
          .card::after {
            animation: none;
          }
        }
      `}</style>

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
              <div className="absolute inset-0">
                <div className="energy-field" />
                <div className="octagon-arena" />
                <div className="octagon-border" />
                <div className="cage-texture" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/90 to-gray-950" />
              </div>

              <div className="relative min-h-screen flex flex-col">
                <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center space-y-12">
                  {/* Logo Section */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="relative group cursor-pointer float-animation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300" />
                    <img
                      src={CONFIG.links.logo}
                      alt="Fight Genie"
                      className="relative h-32 w-auto transform group-hover:scale-110 transition-all duration-300"
                    />
                  </a>

                  {/* Hero Section */}
                  <div className="text-center space-y-6 max-w-3xl">
                    <h1 className="text-6xl font-bold hero-gradient leading-tight">
                      Fight Genie Discord Bot
                    </h1>
                    <p className="text-2xl text-gray-300">
                      Free AI-Powered UFC Predictions Discord Bot
                    </p>
                    <p className="text-xl text-gray-400">
                      Featuring GPT-4o and Claude-3.5
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="cta-button px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Add to Discord</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* AI Models Performance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {Object.entries(CONFIG.stats).map(([key, model]) => (
                      <div key={key} className="relative group transform hover:scale-105 transition-all duration-300 glow-effect">
                        <div className="relative p-6 stats-card rounded-xl border border-gray-800 backdrop-blur flex flex-col items-center card">
                          {key === "gpt" ? (
                            <Brain className="w-12 h-12 text-red-400 mb-4" />
                          ) : (
                            <Bot className="w-12 h-12 text-blue-400 mb-4" />
                          )}
                          <div className="text-2xl font-bold mb-2 text-gray-100">
                            {model.name}
                          </div>
                          <div className="text-4xl font-bold hero-gradient">
                            {model.winRate}%
                          </div>
                          <div className="text-gray-400 mt-2">
                            {model.wins}/{model.totalFights} Predictions
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Commands Section */}
                  <div className="w-full max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8 hero-gradient">
                      Bot Commands
                    </h2>
                    <div className="grid gap-4">
                      {COMMANDS.map((cmd) => (
                        <div
                          key={cmd.command}
                          className="command-card p-4 rounded-xl border border-gray-800 card"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-2xl">
                              {cmd.emoji}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <code className="text-sm px-3 py-1 rounded-lg bg-gray-800 text-red-400 font-mono">
                                  {cmd.command}
                                </code>
                                <span className="text-xs text-gray-500 px-3 py-1 rounded-full bg-gray-800/50">
                                  {cmd.category}
                                </span>
                              </div>
                              <p className="text-gray-400">{cmd.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="flex items-center space-x-8">
                    <a
                      href={CONFIG.social.blog}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Learn More</span>
                    </a>
                    <a
                      href={CONFIG.social.twitter}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                      <span>@FightGenieAI</span>
                    </a>
                    <Link
                      to="/privacy"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </main>

                <footer className="text-center text-gray-500 py-6">
                  Fight Genie 1.0 • Corratech LLC
                </footer>
              </div>
            </div>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsofService />} />
      </Routes>
    </div>
  );
};

export default App;