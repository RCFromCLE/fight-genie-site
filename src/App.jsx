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
  Heart, // Added Heart icon
} from "lucide-react";

const CONFIG = {
  social: {
    twitter: "https://x.com/Fight_Genie",
    blog: "https://rudycorradetti.com/2024/12/04/fight-genie-ai-nodejs-discord-bot-ufc-predictions/",
  },
  stats: {
    gpt: {
      name: "GPT-4o",
      wins: 247,
      totalFights: 399,
      winRate: 61.9,
    },
    claude: {
      name: "Claude-3.7",
      wins: 226,
      totalFights: 381,
      winRate: 59.3,
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
  {
    command: "$donate",
    description: "Support Fight Genie's development and server costs",
    emoji: "💖", // Using a heart emoji
    category: "Support",
  },
];

// Data for Double Lock Performance Stats (Manually update weekly)
const DOUBLE_LOCK_STATS = {
  accuracy: 57.1, // Percentage
  wins: 12,
  total: 21,
};

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
        /* Styles for the cycling background */
        .background-container {
          position: fixed;
          inset: 0;
          z-index: -10; /* Ensure it's behind everything */
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Cover the area, cropping if needed */
          opacity: 0;
          transition: opacity 0.5s ease-in-out; /* Smooth fade transition */
        }

        .background-image.visible {
          opacity: 1;
        }

        .background-overlay {
          position: fixed;
          inset: 0;
          /* Reverted overlay opacity */
          background-color: rgba(0, 0, 0, 0.55);
          z-index: -9; /* Above background images, below content */
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
                <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center justify-center space-y-16">
                  {/* Logo Section - Simplified */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={CONFIG.links.logo}
                      alt="Fight Genie"
                      className="h-36 w-auto" // Slightly larger logo
                    />
                  </a>

                  {/* Hero Section - Bolder text, adjusted spacing */}
                  <div className="text-center space-y-5 max-w-4xl">
                    {/* Use light-text, could use primary-red for emphasis if desired */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-light-text leading-tight tracking-tight">
                      Fight Genie Discord Bot
                    </h1>
                    {/* Use medium-text for secondary info */}
                    <p className="text-xl md:text-2xl text-medium-text">
                      Free AI-Powered UFC Predictions and Analysis
                    </p>
                    <p className="text-lg md:text-xl text-medium-text/80">
                      Featuring <span className="font-semibold text-light-text">{CONFIG.stats.gpt.name}</span> and <span className="font-semibold text-light-text">{CONFIG.stats.claude.name}</span>
                    </p>
                  </div>

                  {/* CTA Button - Use primary-red, bolder text */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="group px-10 py-4 bg-primary-red hover:bg-opacity-90 rounded-md font-bold text-lg text-white shadow-lg transition-all duration-200 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center space-x-2.5">
                      <span>Add to Discord</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* AI Models Performance - Use content-bg, accent-gray border */}
                  <div className="w-full max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-8 text-light-text">
                      AI Model Performance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {Object.entries(CONFIG.stats).map(([key, model]) => (
                        <div key={key} className="transition-all duration-300">
                          {/* Simplified card: content-bg, accent-gray border, no blur/shadow */}
                          <div className="p-6 bg-content-bg rounded-lg border border-accent-gray flex flex-col items-center text-center">
                            {key === "gpt" ? (
                              <Brain className="w-12 h-12 text-primary-red mb-4" />
                            ) : (
                              <Bot className="w-12 h-12 text-medium-text mb-4" />
                            )}
                            <div className="text-2xl font-semibold mb-2 text-light-text">
                              {model.name}
                            </div>
                            {/* Use primary-red for win rate */}
                            <div className="text-4xl font-bold text-primary-red mb-2">
                              {model.winRate.toFixed(1)}%
                            </div>
                            <div className="text-base text-medium-text">
                              {model.wins} Wins / {model.totalFights} Fights
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Double Lock Performance Section - Consistent styling */}
                  <div className="w-full max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8 text-light-text">
                      Double Lock Performance 🔒
                    </h2>
                    <div className="transition-all duration-300">
                      {/* Consistent card style */}
                      <div className="p-6 bg-content-bg rounded-lg border border-accent-gray flex flex-col items-center text-center">
                        {/* Use primary-red or another accent */}
                        <div className="text-4xl font-bold text-primary-red mb-2">
                          {DOUBLE_LOCK_STATS.accuracy.toFixed(1)}%
                        </div>
                        <div className="text-lg text-light-text mb-3">
                          Accuracy ({DOUBLE_LOCK_STATS.wins} Wins / {DOUBLE_LOCK_STATS.total} Fights)
                        </div>
                        <p className="text-sm text-medium-text text-center">
                          (Fights where BOTH models predict the same winner with ≥ 75% confidence)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Commands Section - Consistent styling */}
                  <div className="w-full max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-8 text-light-text">
                      Bot Commands
                    </h2>
                    <div className="grid gap-5">
                      {COMMANDS.map((cmd) => (
                        <div
                          key={cmd.command}
                          className="bg-content-bg p-5 rounded-lg border border-accent-gray transition-colors hover:border-primary-red/50" // Subtle hover border
                        >
                          <div className="flex items-center space-x-4">
                            {/* Darker emoji background */}
                            <div className="w-12 h-12 rounded-lg bg-dark-bg flex items-center justify-center text-2xl flex-shrink-0">
                              {cmd.emoji}
                            </div>
                            <div className="flex-1 min-w-0"> {/* Ensure flex item can shrink */}
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1.5">
                                {/* Command code styling */}
                                <code className="text-base px-2.5 py-1 rounded bg-dark-bg text-primary-red font-semibold font-mono mb-1 sm:mb-0 inline-block break-words">
                                  {cmd.command}
                                </code>
                                {/* Category tag styling */}
                                <span className="text-xs font-medium text-medium-text px-2.5 py-1 rounded-full bg-dark-bg self-start sm:self-center whitespace-nowrap">
                                  {cmd.category}
                                </span>
                              </div>
                              <p className="text-base text-medium-text">{cmd.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Donation Section - Consistent styling */}
                  <div className="w-full max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8 text-light-text">
                      Support Fight Genie <Heart className="inline-block w-7 h-7 text-primary-red mb-1" />
                    </h2>
                    <div className="transition-all duration-300">
                      {/* Consistent card style */}
                      <div className="p-8 bg-content-bg rounded-lg border border-accent-gray flex flex-col items-center text-center">
                        <p className="text-lg text-light-text text-center mb-6">
                          Fight Genie is a free Discord bot run by a solo developer. Your donations help cover server costs and fuel future updates!
                        </p>
                        {/* Donation button styling */}
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=2JF3LZ77YEBEE"
                          className="group px-8 py-3 bg-primary-red hover:bg-opacity-90 rounded-md font-bold text-base text-white shadow-md transition-all duration-200 transform hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Support via PayPal
                        </a>
                        <p className="text-sm text-medium-text mt-5 text-center">
                          Every contribution makes a difference!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Links - Use medium-text, hover primary-red */}
                  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mt-16 text-base">
                    <a
                      href={CONFIG.social.blog}
                      className="group flex items-center space-x-1.5 text-medium-text hover:text-primary-red transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Learn More</span>
                    </a>
                    <a
                      href={CONFIG.social.twitter}
                      className="group flex items-center space-x-1.5 text-medium-text hover:text-primary-red transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                      <span>Follow @Fight_Genie</span>
                    </a>
                    <Link
                      to="/privacy"
                      className="text-medium-text hover:text-primary-red transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      className="text-medium-text hover:text-primary-red transition-colors"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-medium-text hover:text-primary-red transition-colors"
                    >
                      Gallery
                    </Link>
                  </div>
                </main>

                {/* Footer - Use medium-text */}
                <footer className="text-center text-medium-text/70 py-8 text-sm">
                  Fight Genie 1.1 • Corratech LLC
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
