import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsofService from './pages/TermsofService.jsx';
import ImageGallery from './pages/ImageGallery.jsx'; // Import the new gallery component
import { BACKGROUND_IMAGES } from './utils/imageLoader.js'; // Import dynamic image list
import {
  Brain,
  Bot,
  ArrowRight,
  BookOpen,
  Twitter,
  Heart,
  Trophy,
  Crown,
  Zap,
} from "lucide-react";

// ============================================================
// CONFIGURATION - Update these stats manually as needed
// ============================================================
const CONFIG = {
  social: {
    twitter: "https://x.com/Fight_Genie",
    blog: "https://rudycorradetti.com/2024/12/04/fight-genie-ai-nodejs-discord-bot-ufc-predictions/",
  },
  stats: {
    gpt: {
      name: "GPT-5",
      eventsAnalyzed: 46,        // Total UFC events analyzed
      totalFights: 583,           // Total fights predicted
      wins: 361,                  // Correct predictions
      winRate: 61.9,              // Win percentage (wins/totalFights * 100)
      lockRate: 70.5,             // Percentage of locks (≥75% confidence) that were correct
      lockRateDetails: { correct: 86, total: 122 }, // Lock stats breakdown
      methodAccuracy: 30.2,       // Accuracy of predicted finish method
      avgConfidence: 68.5,        // Average prediction confidence
    },
    claude: {
      name: "Claude Sonnet 4.5",
      eventsAnalyzed: 46,         // Total UFC events analyzed
      totalFights: 559,           // Total fights predicted
      wins: 338,                  // Correct predictions
      winRate: 60.5,              // Win percentage (wins/totalFights * 100)
      lockRate: 66,             // Percentage of locks (≥75% confidence) that were correct
      lockRateDetails: { correct: 64, total: 97 }, // Lock stats breakdown
      methodAccuracy: 29,       // Accuracy of predicted finish method
      avgConfidence: 67.4,        // Average prediction confidencee
    },
  },
  doubleLock: {
    accuracy: 64.7,               // When both models agree with ≥75% confidence
    correct: 22,                  // Correct double lock predictions
    total: 34,                    // Total double lock predictions
  },
  links: {
    discordInvite: "https://discord.com/oauth2/authorize?client_id=1297251219374604388",
    logo: "/FightGenie_Logo_1.PNG",
  },
};

const COMMANDS = [
  {
    command: "/upcoming",
    description: "Display next UFC event with interactive prediction options",
    emoji: "🎯",
    category: "Core",
  },
  {
    command: "/predict",
    description: "Generate AI fight predictions for specific matchups",
    emoji: "🥊",
    category: "Core",
  },
  {
    command: "/stats",
    description: "View comprehensive model performance statistics",
    emoji: "📊",
    category: "Analysis",
  },
  {
    command: "/checkstats",
    description: "View detailed statistics for a specific fighter",
    emoji: "👤",
    category: "Analysis",
  },
  {
    command: "/model",
    description: "Switch between GPT-4 and Claude prediction models",
    emoji: "🤖",
    category: "Settings",
  },
  {
    command: "/help",
    description: "Display all available commands with descriptions",
    emoji: "❓",
    category: "Support",
  },
  {
    command: "/donate",
    description: "Support Fight Genie's development and server costs",
    emoji: "💖",
    category: "Support",
  },
  {
    command: "/sub",
    description: "Check bot status and subscription information",
    emoji: "✅",
    category: "Support",
  },
];

// Removed hardcoded BACKGROUND_IMAGES array, it's now imported from imageLoader.js

const App = () => {
  // State for cycling background image index
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Effect to change background image every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 10000); // Change image every 10000ms (10 seconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="relative">
      {/* Minimal inline styles for background cycling */}
      <style>{`
        /* Premium background cycling */
        .background-container {
          position: fixed;
          inset: 0;
          z-index: -10;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: contrast(1.1) saturate(1.2);
        }

        .background-image.visible {
          opacity: 1;
          transform: scale(1.05);
        }

        .background-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(10, 10, 10, 0.4) 0%, 
            rgba(10, 10, 10, 0.7) 50%, 
            rgba(10, 10, 10, 0.95) 100%);
          z-index: -9;
        }

        /* Subtle vignette effect */
        .background-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(10, 10, 10, 0.4) 100%);
        }
      `}</style>

      {/* Background Image Container */}
      <div className="background-container">
        {BACKGROUND_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="" // Alt text is empty as it's decorative
            className={`background-image ${index === currentBgIndex ? 'visible' : ''}`}
            loading="lazy" // Lazy load images
          />
        ))}
      </div>
      <div className="background-overlay"></div>

      <Routes>
        <Route
          path="/"
          element={
            // Removed bg-dark-bg to let image background show through
            <div className="min-h-screen text-light-text overflow-hidden relative">
              {/* Main content container */}
              <div className="relative min-h-screen flex flex-col z-10">
                {/* Increased padding, adjusted max-width and spacing */}
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center space-y-12 sm:space-y-16 lg:space-y-20">
                  {/* Logo Section - Enhanced with animation */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="cursor-pointer group animate-fade-in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={CONFIG.links.logo}
                      alt="Fight Genie"
                      className="h-40 w-auto transform transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                    />
                  </a>

                  {/* Hero Section - Premium typography and effects */}
                  <div className="text-center space-y-6 max-w-5xl animate-slide-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-light-text leading-none tracking-tighter">
                      <span className="bg-gradient-to-r from-light-text via-primary-red to-light-text bg-clip-text text-transparent animate-pulse-slow">
                        Fight Genie
                      </span>
                      <span className="block mt-2 text-4xl md:text-6xl lg:text-7xl font-bold text-light-text">
                        Discord Bot
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-medium-text font-medium">
                      Free AI-Powered UFC Predictions and Analysis
                    </p>
                    <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
                      <span className="px-4 py-1.5 rounded-full bg-primary-red/20 border border-primary-red/30 text-light-text font-semibold">
                        {CONFIG.stats.gpt.name}
                      </span>
                      <span className="text-medium-text">×</span>
                      <span className="px-4 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/30 text-light-text font-semibold">
                        {CONFIG.stats.claude.name}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button - Premium design with glow effect */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-primary-red rounded-xl font-bold text-lg text-white shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-primary-red/50 animate-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Add to Discord</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-red to-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  </a>

                  {/* AI Models Performance - Championship Battle Display */}
                  <div className="w-full max-w-6xl animate-fade-in">
                    {/* Championship Title with Belt */}
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-black text-light-text mb-6">
                        <span className="relative">
                          AI Prediction Championship
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
                        </span>
                      </h2>
                      
                      {/* Championship Belt Visual - Shows Current Champion */}
                      <div className="relative inline-block">
                        <div className="flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-accent-gold/20 via-yellow-500/30 to-accent-gold/20 rounded-xl border-2 border-accent-gold/50">
                          <Trophy className="w-8 h-8 text-accent-gold animate-pulse" />
                          <div className="text-center">
                            <div className="text-sm text-accent-gold uppercase tracking-wider font-bold mb-1">Current Champion</div>
                            <div className="text-2xl font-black text-light-text">
                              {CONFIG.stats.gpt.winRate > CONFIG.stats.claude.winRate ? 
                                `${CONFIG.stats.gpt.name} 🏆` : 
                                `${CONFIG.stats.claude.name} 🏆`}
                            </div>
                            <div className="text-lg font-bold text-accent-gold">
                              {Math.max(CONFIG.stats.gpt.winRate, CONFIG.stats.claude.winRate).toFixed(1)}% Win Rate
                            </div>
                          </div>
                          <Trophy className="w-8 h-8 text-accent-gold animate-pulse" />
                        </div>
                        
                        {/* Championship Belt Decoration */}
                        <div className="absolute -top-2 -left-2 text-4xl animate-spin-slow">⭐</div>
                        <div className="absolute -top-2 -right-2 text-4xl animate-spin-slow" style={{ animationDelay: '0.5s' }}>⭐</div>
                        <div className="absolute -bottom-2 -left-2 text-4xl animate-spin-slow" style={{ animationDelay: '1s' }}>⭐</div>
                        <div className="absolute -bottom-2 -right-2 text-4xl animate-spin-slow" style={{ animationDelay: '1.5s' }}>⭐</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {Object.entries(CONFIG.stats).map(([key, model], index) => {
                        const isChampion = model.winRate === Math.max(CONFIG.stats.gpt.winRate, CONFIG.stats.claude.winRate);
                        const isGPT = key === "gpt";
                        
                        return (
                        <div 
                          key={key} 
                          className="group relative transform transition-all duration-500 hover:scale-[1.02]"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {/* Champion Glow Effect */}
                          {isChampion && (
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/30 via-yellow-400/20 to-accent-gold/30 rounded-2xl blur-2xl animate-pulse" />
                          )}
                          
                          <div className={`absolute inset-0 bg-gradient-to-r ${isGPT ? 'from-primary-red/10 to-red-500/10' : 'from-accent-gold/10 to-yellow-500/10'} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          
                          <div className={`relative glass-effect p-8 rounded-2xl border ${isChampion ? 'border-accent-gold/50 shadow-lg shadow-accent-gold/20' : 'border-white/10'} group-hover:border-primary-red/30 transition-all duration-300`}>
                            {/* Header with icon and name */}
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  {isGPT ? (
                                    <Brain className="w-12 h-12 text-primary-red" />
                                  ) : (
                                    <Bot className="w-12 h-12 text-accent-gold" />
                                  )}
                                  {/* Championship Crown for Winner */}
                                  {isChampion && (
                                    <div className="absolute -top-3 -right-3 text-2xl animate-pulse">
                                      👑
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-2xl font-bold text-light-text">
                                      {model.name}
                                    </div>
                                    {isChampion && (
                                      <span className="px-2 py-0.5 text-xs font-black bg-gradient-to-r from-accent-gold to-yellow-400 text-dark-bg rounded-full uppercase tracking-wider">
                                        Champion
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-sm text-medium-text">
                                    {model.eventsAnalyzed} Events Analyzed
                                  </div>
                                </div>
                              </div>
                              <div className={`text-4xl font-black ${isChampion ? 'bg-gradient-to-r from-accent-gold to-yellow-300' : 'bg-gradient-to-r from-primary-red to-accent-gold'} bg-clip-text text-transparent`}>
                                {model.winRate.toFixed(1)}%
                              </div>
                            </div>

                            {/* Main stats grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {/* Fights Predicted */}
                              <div className="bg-dark-bg/50 rounded-lg p-3">
                                <div className="text-xs text-medium-text uppercase tracking-wider mb-1">Fights</div>
                                <div className="text-2xl font-bold text-light-text">{model.totalFights}</div>
                              </div>
                              
                              {/* Correct Predictions */}
                              <div className="bg-dark-bg/50 rounded-lg p-3">
                                <div className="text-xs text-medium-text uppercase tracking-wider mb-1">Correct</div>
                                <div className="text-2xl font-bold text-success-green">{model.wins}</div>
                              </div>
                              
                              {/* Lock Rate */}
                              <div className="bg-dark-bg/50 rounded-lg p-3">
                                <div className="text-xs text-medium-text uppercase tracking-wider mb-1">Lock Rate (≥75%)</div>
                                <div className="text-xl font-bold text-accent-gold">
                                  {model.lockRate}%
                                  <span className="text-sm text-medium-text ml-2">
                                    ({model.lockRateDetails.correct}/{model.lockRateDetails.total})
                                  </span>
                                </div>
                              </div>
                              
                              {/* Method Accuracy */}
                              <div className="bg-dark-bg/50 rounded-lg p-3">
                                <div className="text-xs text-medium-text uppercase tracking-wider mb-1">Method Acc.</div>
                                <div className="text-xl font-bold text-light-text">{model.methodAccuracy}%</div>
                              </div>
                            </div>

                            {/* Confidence bar */}
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-medium-text">Average Confidence</span>
                                <span className="text-sm font-bold text-light-text">{model.avgConfidence}%</span>
                              </div>
                              <div className="h-3 bg-dark-bg/50 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary-red via-accent-gold to-success-green rounded-full transition-all duration-1000"
                                  style={{ width: `${model.avgConfidence}%` }}
                                />
                              </div>
                            </div>

                            {/* Win rate progress bar */}
                            <div className="mt-4 pt-4 border-t border-white/10">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-medium-text uppercase tracking-wider">Win Rate</span>
                                <span className="text-xs text-medium-text">{model.wins}/{model.totalFights}</span>
                              </div>
                              <div className="h-2 bg-dark-bg/50 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${
                                    isGPT 
                                      ? "bg-gradient-to-r from-primary-red to-red-400" 
                                      : "bg-gradient-to-r from-accent-gold to-yellow-400"
                                  }`}
                                  style={{ width: `${model.winRate}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Double Lock Performance Section - Championship style */}
                  <div className="w-full max-w-3xl mx-auto animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-10 text-light-text">
                      <span className="relative">
                        <span className="gold-glow">Double Lock</span> Performance 🔒
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
                      </span>
                    </h2>
                    <div className="group relative transform transition-all duration-500 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative glass-effect p-10 rounded-2xl border-2 border-accent-gold/30 group-hover:border-accent-gold/60 transition-all duration-300">
                        <div className="absolute top-4 right-4">
                          <span className="text-4xl">🏆</span>
                        </div>
                        <div className="text-6xl font-black bg-gradient-to-r from-accent-gold to-yellow-300 bg-clip-text text-transparent mb-4">
                          {CONFIG.doubleLock.accuracy.toFixed(1)}%
                        </div>
                        <div className="text-xl text-light-text mb-4 font-semibold">
                          Accuracy Rate
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-6">
                          <span className="px-4 py-2 bg-success-green/20 border border-success-green/30 rounded-lg">
                            <span className="text-success-green font-bold">{CONFIG.doubleLock.correct}</span>
                            <span className="text-light-text ml-2">Wins</span>
                          </span>
                          <span className="text-medium-text/50 text-2xl">•</span>
                          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
                            <span className="text-light-text font-bold">{CONFIG.doubleLock.total}</span>
                            <span className="text-medium-text ml-2">Total</span>
                          </span>
                        </div>
                        <p className="text-sm text-medium-text text-center italic">
                          When BOTH models agree with ≥75% confidence
                        </p>
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="text-xs text-medium-text text-center uppercase tracking-wider mb-2">
                            GPT & Claude Double Lock Success Rate
                          </div>
                          <div className="h-3 bg-dark-bg/50 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold rounded-full transition-all duration-1000"
                              style={{ width: `${CONFIG.doubleLock.accuracy}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commands Section - Interactive cards */}
                  <div className="w-full max-w-5xl animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-10 text-light-text">
                      <span className="relative">
                        Bot Commands
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent" />
                      </span>
                    </h2>
                    <div className="grid gap-4">
                      {COMMANDS.map((cmd, index) => (
                        <div
                          key={cmd.command}
                          className="group relative glass-effect p-6 rounded-xl border border-white/5 hover:border-primary-red/40 transform transition-all duration-300 hover:scale-[1.02] hover:translate-x-2"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex items-center gap-5">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-red/20 to-transparent border border-primary-red/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {cmd.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                <code className="text-lg px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary-red/20 to-transparent border border-primary-red/30 text-primary-red font-bold font-mono inline-block">
                                  {cmd.command}
                                </code>
                                <span className="text-xs font-bold text-accent-gold px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 self-start sm:self-center whitespace-nowrap uppercase tracking-wider">
                                  {cmd.category}
                                </span>
                              </div>
                              <p className="text-base text-medium-text group-hover:text-light-text transition-colors duration-300">
                                {cmd.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Donation Section - Centered and Clean */}
                  <div className="w-full max-w-2xl mx-auto animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-10 text-light-text">
                      <span className="relative inline-flex items-center gap-3">
                        Support Fight Genie
                        <Heart className="w-8 h-8 text-primary-red animate-pulse" />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent" />
                      </span>
                    </h2>
                    <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-red/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative glass-effect p-12 rounded-2xl border border-white/10 group-hover:border-primary-red/30 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-8">
                          <p className="text-lg md:text-xl text-light-text leading-relaxed max-w-lg">
                            Fight Genie is a <span className="text-primary-red font-bold">free</span> Discord bot run by a solo developer. 
                            Your donations help cover server costs and fuel future updates!
                          </p>
                          
                          <a
                            href="https://www.paypal.com/donate/?hosted_button_id=2JF3LZ77YEBEE"
                            className="group/btn relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-primary-red rounded-xl font-bold text-lg text-white shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-primary-red/50"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Heart className="w-6 h-6 animate-pulse" />
                            <span>Support via PayPal</span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-red to-red-600 blur-xl opacity-30 group-hover/btn:opacity-50 transition-opacity" />
                          </a>
                          
                          <p className="text-base text-medium-text font-medium">
                            Every contribution makes a difference! 🙏
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Links - Refined design */}
                  <div className="flex flex-wrap justify-center items-center gap-6 mt-20 text-base">
                    <a
                      href={CONFIG.social.blog}
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg text-medium-text hover:text-light-text hover:bg-white/5 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-5 h-5 group-hover:text-primary-red transition-colors" />
                      <span>Learn More</span>
                    </a>
                    <a
                      href={CONFIG.social.twitter}
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg text-medium-text hover:text-light-text hover:bg-white/5 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 group-hover:text-primary-red transition-colors" />
                      <span>Follow @Fight_Genie</span>
                    </a>
                    <Link
                      to="/privacy"
                      className="px-4 py-2 rounded-lg text-medium-text hover:text-light-text hover:bg-white/5 transition-all duration-300"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      className="px-4 py-2 rounded-lg text-medium-text hover:text-light-text hover:bg-white/5 transition-all duration-300"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      to="/gallery"
                      className="px-4 py-2 rounded-lg text-medium-text hover:text-light-text hover:bg-white/5 transition-all duration-300"
                    >
                      Gallery
                    </Link>
                  </div>
                </main>

                {/* Footer - Polished finish */}
                <footer className="text-center py-12 border-t border-white/5">
                  <p className="text-medium-text/60 text-sm font-medium">
                    Fight Genie 1.1 • Corratech LLC
                  </p>
                  <p className="text-medium-text/40 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved
                  </p>
                </footer>
              </div>
            </div>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsofService />} />
        {/* Add Gallery Route */}
        <Route path="/gallery" element={<ImageGallery />} /> 
      </Routes>
    </div>
  );
};

export default App;
