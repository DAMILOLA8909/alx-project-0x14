import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";
import { FaFilter, FaSort, FaFire, FaCalendarAlt, FaStar, FaFilm } from "react-icons/fa";

// Enhanced mock data with more details
const mockMovies = [
  {
    id: "1",
    primaryImage: { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop" },
    titleText: { text: "Interstellar Odyssey" },
    releaseYear: { year: "2024" },
    rating: 8.7,
    genre: ["Sci-Fi", "Adventure"]
  },
  {
    id: "2",
    primaryImage: { url: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500&h=750&fit=crop" },
    titleText: { text: "Midnight in Paris" },
    releaseYear: { year: "2023" },
    rating: 8.2,
    genre: ["Romance", "Drama"]
  },
  {
    id: "3",
    primaryImage: { url: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=500&h=750&fit=crop" },
    titleText: { text: "The Last Samurai" },
    releaseYear: { year: "2022" },
    rating: 8.5,
    genre: ["Action", "History"]
  },
  {
    id: "4",
    primaryImage: { url: "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=500&h=750&fit=crop" },
    titleText: { text: "Neon Dreams" },
    releaseYear: { year: "2024" },
    rating: 7.9,
    genre: ["Thriller", "Mystery"]
  },
  {
    id: "5",
    primaryImage: { url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&h=750&fit=crop" },
    titleText: { text: "Space Opera" },
    releaseYear: { year: "2023" },
    rating: 8.8,
    genre: ["Sci-Fi", "Fantasy"]
  },
  {
    id: "6",
    primaryImage: { url: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&h=750&fit=crop" },
    titleText: { text: "Ocean's Depth" },
    releaseYear: { year: "2024" },
    rating: 7.5,
    genre: ["Adventure", "Drama"]
  },
  {
    id: "7",
    primaryImage: { url: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=500&h=750&fit=crop" },
    titleText: { text: "Desert King" },
    releaseYear: { year: "2022" },
    rating: 8.0,
    genre: ["Action", "Adventure"]
  },
  {
    id: "8",
    primaryImage: { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop" },
    titleText: { text: "Cyber Revolution" },
    releaseYear: { year: "2024" },
    rating: 8.3,
    genre: ["Sci-Fi", "Action"]
  }
];

const Movies: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [year, setYear] = useState<number | null>(2024)
  const [genre, setGenre] = useState<string>("All")
  const [sortBy, setSortBy] = useState<string>("popular")
  const [movies, setMovies] = useState<any[]>(mockMovies)
  const [loading, setLoading] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance", "Fantasy", "Thriller"]
  const sortOptions = [
    { id: "popular", label: "Most Popular", icon: <FaFire /> },
    { id: "rating", label: "Top Rated", icon: <FaStar /> },
    { id: "latest", label: "Newest", icon: <FaCalendarAlt /> }
  ]

  const fetchMovies = useCallback(async () => {
    setLoading(true)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Filter and sort mock data
    let filtered = [...mockMovies]
    
    if (year) {
      filtered = filtered.filter(movie => movie.releaseYear.year === year.toString())
    }
    
    if (genre !== "All") {
      filtered = filtered.filter(movie => movie.genre.includes(genre))
    }
    
    // Apply sorting
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "latest":
        filtered.sort((a, b) => parseInt(b.releaseYear.year) - parseInt(a.releaseYear.year))
        break
      default:
        // Popular (default) - shuffle for demo
        filtered.sort(() => Math.random() - 0.5)
    }
    
    setMovies(filtered)
    setLoading(false)
  }, [year, genre, sortBy])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-slate-900/50 to-purple-900/20"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Your Next{" "}
              <span className="gradient-text">Favorite Movie</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore thousands of movies with detailed information, ratings, and personalized recommendations.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-4 mb-12">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search movies, actors, or directors..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-amber-400/50 focus:shadow-lg focus:shadow-amber-500/20 transition-all text-white placeholder-gray-400"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                  <FaFilter className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Filters & Controls */}
        <div className="mb-10 p-6 glass-effect rounded-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`px-5 py-2.5 rounded-xl transition-all ${genre === g 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold shadow-lg shadow-amber-500/30' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            
            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Options */}
              <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${sortBy === option.id 
                      ? 'bg-amber-500/20 text-amber-300' 
                      : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {option.icon}
                    <span className="hidden md:inline">{option.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Year Selector */}
              <select
                value={year || ""}
                onChange={(e) => setYear(e.target.value ? Number(e.target.value) : null)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400/50 text-white"
              >
                <option value="">All Years</option>
                {[2024, 2023, 2022, 2021, 2020].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              
              {/* View Toggle */}
              <div className="flex bg-white/5 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${viewMode === "grid" ? 'bg-amber-500/20 text-amber-300' : 'text-gray-400 hover:text-white'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${viewMode === "list" ? 'bg-amber-500/20 text-amber-300' : 'text-gray-400 hover:text-white'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Movies</p>
                <p className="text-3xl font-bold gradient-text">12,847</p>
              </div>
              <FaFilm className="text-4xl text-amber-400/50" />
            </div>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">This Year</p>
                <p className="text-3xl font-bold gradient-text">{movies.length}</p>
              </div>
              <FaCalendarAlt className="text-4xl text-amber-400/50" />
            </div>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Avg Rating</p>
                <p className="text-3xl font-bold gradient-text">8.2</p>
              </div>
              <FaStar className="text-4xl text-amber-400/50" />
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <div className="py-20">
            <Loading />
          </div>
        ) : (
          <>
            <div className={`grid ${viewMode === "grid" ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6 mb-10`}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.titleText.text}
                  posterImage={movie.primaryImage.url}
                  releaseYear={movie.releaseYear.year}
                  rating={movie.rating}
                  genre={movie.genre}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                title="Previous"
                action={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
                disabled={page <= 1}
                className="bg-white/5 hover:bg-white/10 disabled:opacity-30"
              />
              
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`w-10 h-10 rounded-lg transition-all ${page === num 
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold' 
                      : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="text-gray-400">...</span>
                <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10">
                  10
                </button>
              </div>
              
              <Button
                title="Next"
                action={() => setPage(page + 1)}
                className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30"
              />
            </div>
          </>
        )}
      </div>

      {/* Featured Collections */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Oscar Winners 2024", "Sci-Fi Masterpieces", "Director's Cut"].map((collection, i) => (
            <div key={i} className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{collection}</h3>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-300 rounded-full text-sm">
                  {i === 0 ? "24 Movies" : i === 1 ? "18 Movies" : "12 Movies"}
                </span>
              </div>
              <p className="text-gray-400 mb-4">Curated collection of the finest cinematic experiences</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">
                Explore Collection →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies;