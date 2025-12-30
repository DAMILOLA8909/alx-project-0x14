import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaHeart, FaFilm } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-slate-950 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg">
                <FaFilm className="text-xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">CineSeek</h2>
                <p className="text-sm text-gray-400">Discover Your Next Favorite Movie</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for movie discovery, reviews, and personalized recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Movies', 'Trending', 'Collections', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Documentary'].map((genre) => (
                <span key={genre} className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-amber-500/20 hover:text-amber-300 transition-colors cursor-pointer">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest movie news and updates.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>

            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> · © {currentYear} CineSeek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;