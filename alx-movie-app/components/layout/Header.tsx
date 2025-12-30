import Link from "next/link"
import Button from "../commons/Button"
import { FaFilm, FaSearch, FaUser } from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg">
              <FaFilm className="text-xl text-white" />
            </div>
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold gradient-text">CineSeek</span>
              <span className="text-xs text-gray-400">Your Movie Universe</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "/" },
              { name: "Movies", href: "/movies" },
              { name: "Trending", href: "/trending" },
              { name: "Collections", href: "/collections" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 hover:glow-effect font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <FaSearch className="text-xl" />
            </button>
            
            <div className="hidden md:flex">
              <Button 
                title={
                  <div className="flex items-center space-x-2">
                    <FaUser />
                    <span>Sign In</span>
                  </div>
                } 
                className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30"
              />
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-white/5">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header