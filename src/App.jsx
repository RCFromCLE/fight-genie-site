import React from 'react';
import { Brain, Bot, ArrowRight, MessageSquare, Zap, Trophy, BookOpen, Twitter } from 'lucide-react';

const CONFIG = {
  social: {
    twitter: "https://twitter.com/FightGenieAI",
    blog: "https://fightgenie.ai/blog/announcement"
  },
  prices: {
    eventPass: 6.99,
    lifetime: 50,
    solanaDiscount: 10
  },
  stats: {
    gpt: {
      name: "GPT-4o",
      wins: 23,
      totalFights: 34,
      winRate: 67.6
    },
    claude: {
      name: "Claude-3.5",
      wins: 19,
      totalFights: 27,
      winRate: 70.4
    }
  },
  links: {
    discordInvite: "https://discord.com/oauth2/authorize?client_id=1297251219374604388",
    logo: "/FightGenie_Logo_1.PNG"
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hexagon.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Solana Discount Banner */}
        <div className="bg-gradient-to-r from-purple-900/20 via-purple-800/30 to-purple-900/20 border-b border-purple-500/10 backdrop-blur-sm py-2">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">Save {CONFIG.prices.solanaDiscount}% When Paying with Solana</span>
          </div>
        </div>

        <main className="flex-1 max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-12">
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
              className="relative h-32 w-auto transform group-hover:scale-110 transition-all duration-300 group-hover:brightness-110" 
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
              <span className="text-sm font-medium text-gray-300 whitespace-nowrap bg-black/90 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-800">
                Add to Discord
              </span>
            </div>
          </a>

          {/* Headline Section */}
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-gray-100 to-blue-500">
              AI-Powered UFC Fight Predictions
            </h1>
            <p className="text-xl text-gray-400">
              Harness the Power of Dual AI Analysis for Accurate UFC Fight Predictions Directly in Your Discord Server
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {Object.entries(CONFIG.stats).map(([key, model]) => (
              <div key={key} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative p-6 rounded-xl bg-gray-950 border border-gray-800/50 backdrop-blur flex flex-col items-center">
                  {key === 'gpt' ? 
                    <Brain className="w-8 h-8 text-red-500 mb-3" /> : 
                    <Bot className="w-8 h-8 text-blue-500 mb-3" />
                  }
                  <div className="font-bold text-2xl mb-2 text-gray-200">{model.name}</div>
                  <div className={`text-4xl font-bold ${key === 'gpt' ? 'text-red-500' : 'text-blue-500'}`}>
                    {model.winRate}%
                  </div>
                  <div className="text-base text-gray-400 mt-2">
                    {model.wins}/{model.totalFights} Predictions
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="p-6 rounded-xl bg-gray-950 border border-gray-800/50 group hover:border-red-900/50 transition-colors">
              <Trophy className="w-6 h-6 text-red-500 mb-3" />
              <div className="text-2xl font-bold mb-2 text-gray-200">Event Pass</div>
              <div className="text-3xl font-bold text-red-500">${CONFIG.prices.eventPass}</div>
              <div className="text-base text-gray-400 mt-2">Access Both AIs for One Event</div>
            </div>

            <div className="p-6 rounded-xl bg-gray-950 border border-gray-800/50 relative group hover:border-blue-900/50 transition-colors">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-900 to-blue-900 text-gray-200 px-3 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <Trophy className="w-6 h-6 text-blue-500 mb-3" />
              <div className="text-2xl font-bold mb-2 text-gray-200">Lifetime Access</div>
              <div className="text-3xl font-bold text-blue-500">${CONFIG.prices.lifetime}</div>
              <div className="text-base text-gray-400 mt-2">Unlimited Access Forever</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-4">
            <a 
              href={CONFIG.links.discordInvite}
              className="group relative inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative px-8 py-4 bg-gray-950 rounded-lg flex items-center font-bold text-lg border border-gray-800/50">
                <MessageSquare className="w-6 h-6 mr-3" />
                Add to Discord
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <p className="text-base text-gray-400 mt-4">
              Use <code className="bg-gray-950 px-3 py-1 rounded-lg border border-gray-800/50">$buy</code> after adding bot
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-8">
            <a 
              href={CONFIG.social.blog}
              className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm"> Nerd Stuff</span>
            </a>
            <a 
              href={CONFIG.social.twitter}
              className="group flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm">@FightGenieAI</span>
            </a>
          </div>
        </main>

        <footer className="text-center text-base text-gray-500 py-6">
          Fight Genie 1.0 • Corratech LLC
        </footer>
      </div>
    </div>
  );
};

export default App;