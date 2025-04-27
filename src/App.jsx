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
      wins: 209,
      totalFights: 341,
      winRate: 61.3,
    },
    claude: {
      name: "Claude-3.7",
      wins: 200,
      totalFights: 340,
      winRate: 58.8,
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
  accuracy: 63.2, // Percentage
  wins: 12,
  total: 19,
};

// Removed hardcoded BACKGROUND_IMAGES array, it's now imported from imageLoader.js

const App = () => {
  // State for cycling background image index
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Effect to change background image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5000ms (5 seconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

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
            #B91C1C, 
            #DC2626, 
            #6B7280, 
            #B91C1C  
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
            rgba(185, 28, 28, 0.15), 
            rgba(75, 85, 99, 0.15),  
            rgba(185, 28, 28, 0.15) 
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
          border: 2px solid rgba(156, 163, 175, 0.2); 
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
            radial-gradient(circle at 30% 30%, rgba(185, 28, 28, 0.15) 0%, transparent 50%), 
            radial-gradient(circle at 70% 70%, rgba(75, 85, 99, 0.15) 0%, transparent 50%); 
          animation: pulse 6s ease-in-out infinite alternate;
        }

        .cage-texture {
          position: fixed;
          inset: 0;
          background-image: 
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.05) 0px, 
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.05) 0px, 
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 30px
            );
          /* Add a subtle noise texture overlay */
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.05) 0px, 
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.05) 0px, 
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 30px
            );
          opacity: 0.5; /* Make texture subtle */
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
            rgba(17, 17, 17, 0.95), 
            rgba(30, 30, 30, 0.95)  
          );
          /* Add a subtle inner border */
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 0 20px rgba(0,0,0,0.3),
            inset 0 0 20px rgba(255,255,255,0.05);
        }

        .command-card {
          background: rgba(17, 17, 17, 0.95); 
          /* Add a subtle inner border */
          border: 1px solid rgba(255, 255, 255, 0.05);
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
            rgba(185, 28, 28, 0.3), 
            rgba(75, 85, 99, 0.3)   
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
          background: linear-gradient(45deg, #DC2626, #6B7280); 
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
          transition: opacity 1s ease-in-out; /* Fade transition */
        }

        .background-image.visible {
          opacity: 1;
        }

        .background-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.65); /* Reduced opacity for better background visibility */
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
            
            <div className="min-h-screen bg-transparent text-white overflow-hidden relative"> {/* Changed bg-black to bg-transparent */}
              {/* Removed previous background effects container */}
              {/* <div className="absolute inset-0"> */}
                {/* Removed energy-field, octagon-arena, octagon-border, cage-texture */}
                {/* Optional: Keep a subtle gradient overlay if needed */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" /> */}
              {/* </div> */}

              {/* Ensure content is relatively positioned to appear above the background */}
              {/* Added subtle gradient background and increased vertical spacing */}
              <div className="relative min-h-screen flex flex-col z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/50"> 
                <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center space-y-16"> {/* Increased py and space-y */}
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
                  <div className="text-center space-y-4 max-w-3xl"> {/* Reduced space-y */}
                    <h1 className="text-5xl md:text-6xl font-bold hero-gradient leading-tight"> {/* Responsive text size */}
                      Fight Genie Discord Bot
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300"> {/* Responsive text size */}
                      Free AI-Powered UFC Predictions and Analysis
                    </p>
                    <p className="text-lg md:text-xl text-gray-400"> {/* Responsive text size */}
                      Featuring {CONFIG.stats.gpt.name} and {CONFIG.stats.claude.name} {/* Dynamic model names */}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="cta-button px-8 py-4 bg-gradient-to-r from-red-600 to-gray-700 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" /* Adjusted styles */
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Add to Discord</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* AI Models Performance */}
                  <div className="w-full max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8 hero-gradient"> {/* Consistent heading */}
                      AI Model Performance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(CONFIG.stats).map(([key, model]) => (
                      <div key={key} className="relative group transform hover:scale-105 transition-all duration-300 glow-effect">
                        {/* Adjusted card styling */}
                        <div className="relative p-6 stats-card rounded-lg border border-gray-700 backdrop-blur flex flex-col items-center card"> 
                          {key === "gpt" ? (
                            <Brain className="w-10 h-10 text-red-500 mb-3" /> /* Slightly smaller icon */
                          ) : (
                            <Bot className="w-10 h-10 text-gray-400 mb-3" /> /* Slightly smaller icon */
                          )}
                          <div className="text-xl font-semibold mb-1 text-gray-100"> {/* Adjusted text size/weight */}
                            {model.name}
                          </div>
                          <div className="text-3xl font-bold hero-gradient mb-1"> {/* Adjusted text size */}
                            {model.winRate.toFixed(1)}% {/* Ensure one decimal place */}
                          </div>
                          <div className="text-sm text-gray-400"> {/* Adjusted text size */}
                            {model.wins} Wins / {model.totalFights} Fights
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>

                  {/* Double Lock Performance Section (Moved Here) */}
                  <div className="w-full max-w-md mx-auto"> {/* Centered and constrained width */}
                    <h2 className="text-3xl font-bold text-center mb-8 hero-gradient"> {/* Consistent heading */}
                      Double Lock Performance 🔒
                    </h2>
                    <div className="relative group transform hover:scale-105 transition-all duration-300 glow-effect">
                       {/* Adjusted card styling */}
                       <div className="relative p-6 stats-card rounded-lg border border-yellow-600/60 backdrop-blur flex flex-col items-center card bg-gradient-to-br from-gray-900 via-yellow-900/10 to-black">
                         <div className="text-3xl font-bold text-yellow-400 mb-1"> {/* Adjusted text size */}
                           {DOUBLE_LOCK_STATS.accuracy.toFixed(1)}%
                         </div>
                         <div className="text-base text-gray-300 mb-2"> {/* Adjusted text size */}
                           Accuracy ({DOUBLE_LOCK_STATS.wins} Wins / {DOUBLE_LOCK_STATS.total} Fights)
                         </div>
                         <p className="text-xs text-gray-500 text-center">
                           (Fights where BOTH models predict the same winner with ≥ 75% confidence) {/* Using ≥ symbol */}
                         </p>
                       </div>
                     </div>
                  </div>

                  {/* Commands Section */}
                  <div className="w-full max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8 hero-gradient"> {/* Consistent heading */}
                      Bot Commands
                    </h2>
                    <div className="grid gap-4 md:gap-5"> {/* Slightly larger gap on medium screens */}
                      {COMMANDS.map((cmd) => (
                        <div
                          key={cmd.command}
                          className="command-card p-4 rounded-lg border border-gray-700 card" /* Adjusted styles */
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center text-xl"> {/* Adjusted size/shape */}
                              {cmd.emoji}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1"> {/* Responsive layout */}
                                <code className="text-sm px-2 py-0.5 rounded bg-gray-700 text-red-400 font-mono mb-1 sm:mb-0"> {/* Adjusted styles */}
                                  {cmd.command}
                                </code>
                                <span className="text-xs text-gray-500 px-2 py-0.5 rounded-full bg-gray-800/60 self-start sm:self-center"> {/* Adjusted styles */}
                                  {cmd.category}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400">{cmd.description}</p> {/* Adjusted text size */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Donation Section */}
                  <div className="w-full max-w-2xl mx-auto"> 
                    <h2 className="text-3xl font-bold text-center mb-8 hero-gradient"> {/* Consistent heading */}
                      Support Fight Genie <Heart className="inline-block w-6 h-6 text-red-500 mb-1" /> {/* Adjusted size */}
                    </h2>
                    <div className="relative group transform hover:scale-105 transition-all duration-300 glow-effect">
                      {/* Adjusted card styling */}
                      <div className="relative p-6 stats-card rounded-lg border border-red-600/60 backdrop-blur flex flex-col items-center card bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
                        <p className="text-base md:text-lg text-gray-300 text-center mb-5"> {/* Responsive text size */}
                          Fight Genie is a free Discord bot run by a solo developer. Your donations help cover server costs and fuel future updates! {/* Slightly rephrased */}
                        </p>
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=2JF3LZ77YEBEE"
                          className="cta-button px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-base text-black shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" /* Adjusted styles */
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Support via PayPal
                        </a>
                        <p className="text-xs text-gray-500 mt-4 text-center"> {/* Increased margin-top */}
                          Every contribution makes a difference!
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Footer Links */}
                  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-16 text-sm"> {/* Responsive links, increased margin-top */}
                    <a
                      href={CONFIG.social.blog}
                      className="group flex items-center space-x-1.5 text-gray-400 hover:text-red-400 transition-colors" /* Adjusted hover color */
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-4 h-4" /> {/* Smaller icon */}
                      <span>Learn More</span>
                    </a>
                    <a
                      href={CONFIG.social.twitter}
                      className="group flex items-center space-x-1.5 text-gray-400 hover:text-red-400 transition-colors" /* Adjusted hover color */
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4" /> {/* Smaller icon */}
                      <span>Follow @Fight_Genie</span> {/* Updated text */}
                    </a>
                    <Link
                      to="/privacy"
                      className="text-gray-400 hover:text-red-400 transition-colors" /* Adjusted hover color */
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      className="text-gray-400 hover:text-red-400 transition-colors" /* Adjusted hover color */
                    >
                      Terms of Service
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-gray-400 hover:text-red-400 transition-colors" /* Adjusted hover color */
                    >
                      Gallery
                    </Link>
                  </div>
                </main>

                <footer className="text-center text-gray-500 py-6">
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
