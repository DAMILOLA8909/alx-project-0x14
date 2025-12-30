import { FaFilm } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="text-center">
        {/* Animated film reel */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-amber-500/30"></div>
            <div className="absolute inset-8 rounded-full border-4 border-amber-500/50 animate-ping"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaFilm className="text-6xl text-amber-400 animate-pulse" />
            </div>
          </div>
          
          {/* Popcorn animation */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <GiPopcorn className="text-3xl text-yellow-300 animate-bounce" />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text animate-pulse">
            Loading Magic
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Fetching the latest movies from our cinematic universe...
          </p>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 animate-loading-bar"></div>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Please wait while we prepare your movie experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;