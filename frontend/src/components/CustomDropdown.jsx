import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomDropdown
 * A premium-styled dropdown component for the SkillPath AI portal.
 * 
 * @param {string} label - The label for the dropdown (e.g., "Status")
 * @param {string} value - The currently selected value
 * @param {Array} options - List of options { label, value }
 * @param {Function} onChange - Callback when value changes
 */
const CustomDropdown = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center gap-3 bg-[#0b1326] px-5 py-2.5 rounded-2xl border border-white/10 hover:border-primary/40 transition-all cursor-pointer group shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        {label && <span className="text-[10px] uppercase font-black text-slate-500 tracking-[0.1em]">{label}:</span>}
        <div className="flex items-center gap-2">
          <span className="text-sm text-white font-bold">{selectedOption.label}</span>
          <span className={`material-symbols-outlined text-primary text-lg transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 bg-[#1a2236] border border-white/10 rounded-[1.5rem] shadow-2xl py-3 z-[100] animate-in fade-in zoom-in duration-200 origin-top-right">
          <div className="px-2 space-y-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                  value === option.value 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {option.label}
                {value === option.value && (
                  <span className="material-symbols-outlined text-sm font-black">check</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
