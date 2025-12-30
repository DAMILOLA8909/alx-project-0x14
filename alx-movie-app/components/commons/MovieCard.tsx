import { MovieProps } from "@/interfaces"
import Image from "next/image"
import { FaStar, FaPlay, FaBookmark } from "react-icons/fa"

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear, rating, genre }) => {
  const imageUrl = posterImage || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop";
  
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover-lift hover:glow-effect">
      {/* Image container */}
      <div className="relative h-80 overflow-hidden">
        <Image 
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized={true}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-amber-500 transition-colors">
            <FaBookmark className="text-white" />
          </button>
          <button className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-amber-500 transition-colors">
            <FaPlay className="text-white" />
          </button>
        </div>
        
        {/* Rating badge */}
        {rating && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
            <FaStar className="text-amber-400" />
            <span className="text-white font-semibold">{rating}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Genre tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {genre?.slice(0, 2).map((g, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-amber-500/10 text-amber-300 rounded-full">
              {g}
            </span>
          ))}
          {genre && genre.length > 2 && (
            <span className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-full">
              +{genre.length - 2}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        
        {/* Year and details */}
        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-semibold">{releaseYear}</span>
          <span className="text-gray-400 text-sm">Movie</span>
        </div>
        
        {/* Hover info */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-lg mb-3 hover:shadow-lg hover:shadow-amber-500/30 transition-all transform hover:scale-105">
            View Details
          </button>
          <p className="text-sm text-gray-300 line-clamp-2">
            Explore cast, crew, reviews, and more about this movie.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard