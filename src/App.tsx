import { useState, useEffect } from 'react'
import { FiMoon, FiSun, FiGithub, FiExternalLink, FiInstagram } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-display font-bold text-xl">My Portfolio</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              Hi, I'm <span className="gradient-text">Angga Pratama</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A passionate developer focused on creating beautiful and functional web applications
              that make a difference.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-3xl mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MyQuran Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                  <img
                    src="https://placehold.co/600x400"
                    alt="MyQuran Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href="https://myquran-on.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                    >
                      View Live Site
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">MyQuran</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A modern Quran web application with translations and audio recitations.
                    Built with React and modern web technologies.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://myquran-on.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <FiExternalLink /> Visit Site
                    </a>
                    <a
                      href="https://github.com/angga0x/myquran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <FiGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Lampung Weather Forecast */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src="Lampung Weather Forecast"
                    alt="E-Commerce Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A full-featured e-commerce platform with cart management, payments, and admin dashboard.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://weather-lpg.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <FiExternalLink /> Visit Site
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <FiGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Platform Project Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Blog Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">Blog Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A modern blogging platform with markdown support, comments, and social features.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <FiExternalLink /> Visit Site
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <FiGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-3xl mb-8">Website Preview</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl p-4">
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://myquran-on.vercel.app"
                  title="MyQuran Website Preview"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-display font-bold text-3xl mb-8">About Me</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                I'm a full-stack developer with a passion for creating meaningful web applications.
                My focus is on building accessible, user-friendly experiences that solve real-world problems.
                I specialize in React, TypeScript, and modern web technologies.
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center gap-6 mb-6">
              <a
                href="https://instagram.com/angga.x0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://github.com/angga0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://tiktok.com/@angga.x0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">© 2024 Angga Pratama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
