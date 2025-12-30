import React from 'react';

interface MovieCardProps {
  title: string;
  year: string;
  posterUrl: string;
  rating?: number;
  overview?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  title, 
  year, 
  posterUrl, 
  rating, 
  overview 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={posterUrl} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        {rating && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold">
            {rating.toFixed(1)}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{year}</p>
        {overview && (
          <p className="text-gray-700 text-sm mt-2 line-clamp-2">{overview}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;