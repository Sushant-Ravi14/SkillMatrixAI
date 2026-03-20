import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center px-12 py-8 z-50 bg-transparent text-indigo-400 font-inter text-[11px] uppercase tracking-[0.05em]">
      <div className="text-slate-500">© 2024 The Kinetic Path. AI-Curated Experience.</div>
      <div className="flex gap-8">
        <a className="text-slate-500 hover:text-slate-300 transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
        <a className="text-slate-500 hover:text-slate-300 transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
        <a className="text-slate-500 hover:text-slate-300 transition-all opacity-80 hover:opacity-100" href="#">System Status</a>
      </div>
    </footer>
  );
}

export default Footer;
