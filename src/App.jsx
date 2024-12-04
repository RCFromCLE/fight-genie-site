import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsofService from './pages/TermsofService.jsx';
import {
  Brain,
  Bot,
  ArrowRight,
  MessageSquare,
  Zap,
  Trophy,
  BookOpen,
  Twitter,
} from "lucide-react";

const CONFIG = {
  social: {
    twitter: "https://x.com/Fight_Genie",
    blog: "https://rudycorradetti.com/2024/12/04/fight-genie-ai-nodejs-discord-bot-ufc-predictions/",
  },
  prices: {
    eventPass: 6.99,
    lifetime: 50,
    solanaDiscount: 10,
  },
  stats: {
    gpt: {
      name: "GPT-4o",
      wins: 23,
      totalFights: 34,
      winRate: 67.6,
    },
    claude: {
      name: "Claude-3.5",
      wins: 19,
      totalFights: 27,
      winRate: 70.4,
    },
  },
  links: {
    discordInvite:
      "https://discord.com/oauth2/authorize?client_id=1297251219374604388",
    logo: "/FightGenie_Logo_1.PNG",
  },
};

const COMMANDS = [
  {
    command: "$upcoming",
    description:
      "Display next UFC event details, predictions, analysis, and more",
    emoji: "🎯",
    category: "Core",
  },
  {
    command: "$buy",
    description: "Purchase Fight Genie access for your Discord server",
    emoji: "💳",
    category: "Core",
  },
  {
    command: "$promo",
    description: "Redeem a promo code for free event access",
    emoji: "🎟️",
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
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white overflow-hidden relative">
              {/* Meta & Favicon */}
              <div className="hidden">
                <link
                  rel="icon"
                  type="image/png"
                  href="/FightGenie_Logo_1.PNG"
                />
                <meta
                  property="og:title"
                  content="Fight Genie - Discord's #1 UFC Prediction Bot"
                />
                <meta
                  property="og:description"
                  content="AI-powered UFC fight predictions and analysis by GPT-4 and Claude-3.5"
                />
                <meta property="og:image" content="/FightGenie_Logo_1.PNG" />
                <meta property="og:url" content="https://fightgenie.ai" />
                <meta name="twitter:card" content="summary_large_image" />
              </div>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/hexagon.svg')] opacity-[0.02]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              </div>

              <div className="relative min-h-screen flex flex-col">
                {/* Solana Discount Banner */}
                <div className="bg-gradient-to-r from-purple-900/20 via-purple-800/30 to-purple-900/20 border-b border-purple-500/10 backdrop-blur-sm py-2 px-4 sm:px-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-200">
                      Save {CONFIG.prices.solanaDiscount}% When Paying with
                      Solana
                    </span>
                  </div>
                </div>

                <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center justify-center space-y-8 sm:space-y-12">
                  {/* Logo Section */}
                  <a
                    href={CONFIG.links.discordInvite}
                    className="relative group cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-full opacity-0 group-hover:opacity-75 animate-spin-slow blur-lg transition-all duration-300" />
                    <img
                      src={CONFIG.links.logo}
                      alt="Fight Genie"
                      className="relative h-24 sm:h-32 w-auto transform group-hover:scale-110 transition-all duration-300 group-hover:brightness-110"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
                      <span className="text-sm font-medium text-gray-300 whitespace-nowrap bg-black/90 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-800">
                        Add to Discord
                      </span>
                    </div>
                  </a>

                  {/* Headline Section */}
                  <div className="text-center space-y-4 sm:space-y-6 max-w-3xl px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-gray-100 to-blue-500 leading-tight">
                      Discord's #1 UFC Prediction Bot
                    </h1>
                    <div className="space-y-2">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-200">
                        GPT-4o vs Claude-3.5: Who Will Predict Better?
                      </p>
                      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        Add Fight Genie to Your Discord Today
                      </p>
                    </div>
                  </div>

                  {/* Discord Button Section */}
                  <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-md px-4">
                    <a
                      href={CONFIG.links.discordInvite}
                      className="relative group transform hover:scale-105 transition-all duration-300 w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-xl opacity-70 group-hover:opacity-100 blur transition-all duration-300"></div>
                      <div className="relative px-6 sm:px-8 py-4 bg-gray-950 rounded-xl flex items-center justify-center space-x-3 border border-gray-800/50">
                        <svg
                          height="32"
                          width="32"
                          viewBox="0 0 71 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                            fill="#5865F2"
                          />
                        </svg>
                        <div>
                          <span className="text-lg sm:text-xl font-bold text-white">
                            Add to Discord
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                    <p className="text-gray-400 text-sm">
                      Join 10+ servers already using Fight Genie
                    </p>
                  </div>
                  {/* Stats Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl px-4">
                    {Object.entries(CONFIG.stats).map(([key, model]) => (
                      <div key={key} className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur" />
                        <div className="relative p-4 sm:p-6 rounded-xl bg-gray-950 border border-gray-800/50 backdrop-blur flex flex-col items-center">
                          {key === "gpt" ? (
                            <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-red-500 mb-2 sm:mb-3" />
                          ) : (
                            <Bot className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 mb-2 sm:mb-3" />
                          )}
                          <div className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2 text-gray-200">
                            {model.name}
                          </div>
                          <div
                            className={`text-3xl sm:text-4xl font-bold ${
                              key === "gpt" ? "text-red-500" : "text-blue-500"
                            }`}
                          >
                            {model.winRate}%
                          </div>
                          <div className="text-sm sm:text-base text-gray-400 mt-2">
                            {model.wins}/{model.totalFights} Predictions
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl px-4">
                    <div className="p-4 sm:p-6 rounded-xl bg-gray-950 border border-gray-800/50 group hover:border-red-900/50 transition-colors">
                      <Trophy className="w-6 h-6 text-red-500 mb-3" />
                      <div className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">
                        Event Pass
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-red-500">
                        ${CONFIG.prices.eventPass}
                      </div>
                      <div className="text-sm sm:text-base text-gray-400 mt-2">
                        Access Both AIs for One Event
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 rounded-xl bg-gray-950 border border-gray-800/50 relative group hover:border-blue-900/50 transition-colors">
                      <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-900 to-blue-900 text-gray-200 px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        BEST VALUE
                      </div>
                      <Trophy className="w-6 h-6 text-blue-500 mb-3" />
                      <div className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">
                        Lifetime Access
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                        ${CONFIG.prices.lifetime}
                      </div>
                      <div className="text-sm sm:text-base text-gray-400 mt-2">
                        Unlimited Access Forever
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="w-full max-w-3xl px-4">
                    <div className="p-6 rounded-xl bg-gray-950 border border-gray-800/50 relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/30 to-blue-900/30 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-200">
                          Features
                        </h2>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/50">
                            <span className="text-2xl">🎯</span>
                            <p className="text-sm text-gray-300">
                              GPT-4o and Claude-3.5 compete to predict Main Card
                              & Prelims using the same method(s) and dataset.
                            </p>
                          </div>

                          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/50">
                            <span className="text-2xl">🔒</span>
                            <p className="text-sm text-gray-300">
                              Platform identifies high-probability plays with
                              proprietary lock and edge system
                            </p>
                          </div>

                          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/50">
                            <span className="text-2xl">📊</span>
                            <p className="text-sm text-gray-300">
                              Full fight breakdowns for main and prelims
                              available via DM
                            </p>
                          </div>

                          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/50">
                            <span className="text-2xl">🔄</span>
                            <p className="text-sm text-gray-300">
                              User can update fighter stats if needed for more
                              accurate future predictions
                            </p>
                          </div>
                        </div>

                        <p className="text-center text-sm text-gray-400">
                          Additional AI models and features planned for future
                          updates
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment & Setup Section */}
                  <div className="w-full max-w-3xl px-4">
                    <div className="relative group p-4 sm:p-6 rounded-xl bg-gray-950 border border-gray-800/50">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/30 to-blue-900/30 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-200">
                          How to Get Started
                        </h2>

                        <div className="grid gap-3 sm:gap-4">
                          {/* Step 1 */}
                          <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-900/50">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400 font-bold">
                              1
                            </div>
                            <p className="text-sm sm:text-base text-gray-300">
                              Add Fight Genie to your Discord server
                            </p>
                          </div>

                          {/* Step 2 */}
                          <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-900/50">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold">
                              2
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm sm:text-base text-gray-300">
                                Type{" "}
                                <code className="px-2 py-1 rounded bg-gray-800 text-gray-200">
                                  $buy
                                </code>{" "}
                                in any channel
                              </p>
                              <p className="text-xs sm:text-sm text-gray-400">
                                You will receive a DM. Complete your payment,
                                return to your DM, and verify access
                              </p>
                            </div>
                          </div>

                          {/* Step 3 */}
                          <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-900/50">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 font-bold">
                              3
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm sm:text-base text-gray-300">
                                Type{" "}
                                <code className="px-2 py-1 rounded bg-gray-800 text-gray-200">
                                  $upcoming
                                </code>{" "}
                                to start
                              </p>
                              <p className="text-xs sm:text-sm text-gray-400">
                                View AI predictions and analysis for upcoming
                                fights
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-6">
                          <p className="text-center text-sm sm:text-base text-gray-400 mb-4">
                            Secure Payment Options
                          </p>
                          <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            <div className="flex items-center justify-center p-2 sm:p-3 rounded-lg bg-gray-900/50 border border-gray-800/30">
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <span className="text-lg sm:text-xl">💳</span>
                                <span className="text-xs sm:text-sm text-gray-300">
                                  Apple Pay
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center p-2 sm:p-3 rounded-lg bg-gray-900/50 border border-gray-800/30">
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <span className="text-lg sm:text-xl">💸</span>
                                <span className="text-xs sm:text-sm text-gray-300">
                                  PayPal
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center p-2 sm:p-3 rounded-lg bg-gray-900/50 border border-gray-800/30">
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <span className="text-lg sm:text-xl">⚡</span>
                                <span className="text-xs sm:text-sm text-gray-300">
                                  Solana (-10%)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commands Section */}
                  <div className="w-full max-w-3xl px-4">
                    <div className="relative group p-4 sm:p-6 rounded-xl bg-gray-950 border border-gray-800/50">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/30 to-blue-900/30 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur"></div>

                      <div className="relative space-y-4 sm:space-y-6">
                        <div className="text-center">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-200">
                            Bot Commands
                          </h2>
                          <p className="text-sm sm:text-base text-gray-400 mt-2">
                            All commands start with $ and should work in any
                            channel
                          </p>
                        </div>

                        <div className="grid gap-3 sm:gap-4">
                          {COMMANDS.map((cmd) => (
                            <div
                              key={cmd.command}
                              className="group relative p-3 sm:p-4 rounded-lg bg-gray-900/50 border border-gray-800/30 hover:border-gray-700/50 transition-colors"
                            >
                              <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-lg sm:text-xl">
                                  {cmd.emoji}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                    <code className="text-xs sm:text-sm px-2 py-1 rounded bg-gray-800 text-gray-200 font-mono">
                                      {cmd.command}
                                    </code>
                                    <span className="text-xs text-gray-500 px-2 py-1 rounded-full bg-gray-900/50">
                                      {cmd.category}
                                    </span>
                                  </div>
                                  <p className="mt-2 text-xs sm:text-sm text-gray-400">
                                    {cmd.description}
                                  </p>
                                </div>
                              </div>
                              <div className="absolute inset-0 border border-purple-500/0 rounded-lg transition-all duration-300 group-hover:border-purple-500/20"></div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 text-center text-xs sm:text-sm text-gray-500">
                          All commands work in any channel after adding and
                          purchasing access
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-6 mt-6 sm:mt-8">
                    <a
                      href={CONFIG.social.blog}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span className="text-xs sm:text-sm">Nerd Stuff</span>
                    </a>
                    <a
                      href={CONFIG.social.twitter}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span className="text-xs sm:text-sm">@FightGenieAI</span>
                    </a>
                    <Link
                      to="/privacy"
                      className="text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      className="text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </main>

                <footer className="text-center text-sm sm:text-base text-gray-500 py-4 sm:py-6 px-4">
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

{
  /* Add this pulsing dot animation to the styles */
}
<style jsx>{`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
    }
  }
  .animate-pulse {
    animation: pulse 2s infinite;
  }
`}</style>;

export default App;
