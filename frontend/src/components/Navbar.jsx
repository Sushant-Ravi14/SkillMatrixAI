import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-transparent text-indigo-400 dark:text-indigo-300 font-inter text-sm tracking-wide">
      <div className="text-2xl font-black tracking-tighter text-indigo-400 dark:text-indigo-300">
        SkillPath AI
      </div>
      <div className="flex items-center gap-6">
        <button 
          className="material-symbols-outlined hover:text-indigo-300 transition-colors duration-300 scale-95"
          data-icon="dark_mode"
        >
          dark_mode
        </button>
        <button 
          className="material-symbols-outlined hover:text-indigo-300 transition-colors duration-300 scale-95"
          data-icon="help"
        >
          help
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
