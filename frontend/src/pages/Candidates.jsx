import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const candidates = [
  {
    name: 'Marcus Chen',
    email: 'marcus.c@kinetic.ai',
    role: 'Lead Frontend Engineer',
    status: 'Approved',
    statusClass: 'bg-secondary/10 text-secondary border-secondary/20',
    progress: 82,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIEMQsB6KCGG7R-1M6TnSxHqBz8-jL-UhRCS6WGfoVxbt0nAdqN1oIQZAe6pzVB2pV1ekSkxC9VyAqkVsOfJSSP2DBXu_1vjGpw6AFAfa24jbR72KgG1nizLDft_uwtzarImg1q8ox_3xK8U3rL5_Mbt4U8RkoTuxAw_UvWyax7xUlLUJ2orN1Y3YQx1yQlr0CtTMSj92lBQzqwpA48WlYNAIXHnBfyKGUBdK_eInvu9tLPA0rI7SDwVUFSA7cBFN2n6VG1OsXYg',
  },
  {
    name: 'Sarah Drasner',
    email: 's.drasner@kinetic.ai',
    role: 'Senior DevOps Architect',
    status: 'Completed',
    statusClass: 'bg-primary/10 text-primary border-primary/20',
    progress: 100,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGFb4Y_EonHWn6vmuwJjnN66PsdmGXfC8xmOjKNPWnsnKoLvj6-IhIpHOvoovyOOxNXWxWF7k83c2e1X95EtpNqWImhDdrCiady0oT6MEIsMcB4tdYo6cFX9UrLjfVYKoN7w-DjtUAtVVT15qyz6qmElnI4sygu52GptzcIwP-KT48ZUz-gflFRvF5GSV0gvzM26FgQ0JungNPk-Xa3B5aMqTBPiE_JPxLFehI53Z6Cnmhu73jE192iMOXtHulPcxEkoUTIU4Wg',
  },
  {
    name: 'Arjun Mehta',
    email: 'mehta.a@kinetic.ai',
    role: 'Product Designer',
    status: 'Pending',
    statusClass: 'bg-surface-container-highest text-outline border-outline-variant/20',
    progress: 14,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyqkOZwJkcyAKaMTjqdlnlAvPc_C7m7eeS3_S06UvSpro1x24TWm9R_UbZR_14rYy8JW2WKeVPr1x-P36Q_gVi37qXPWrO5D7jMLdrnkfP51fDYpGJyBnrYdJb-koE3CjReRU5txxxm4cheJRJeeUa_RrtPKL_Ihglz44t2rGMII4lsIiVRtcvONhKE7Mt4SSUz8tp3tCbNgpZJONsyb8_8jxYfQPh2yVglYu8XMdwE2rSSCYLlzpMEIkCfHei6WAuRUIdJZ1uAw',
  },
  {
    name: 'Helena Joyce',
    email: 'h.joyce@kinetic.ai',
    role: 'Security Specialist',
    status: 'Approved',
    statusClass: 'bg-secondary/10 text-secondary border-secondary/20',
    progress: 45,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHcn_Z_qqOajKC9fWlkTd5fZVuAJlruNAaGMEGJmGI7d2nduH-P_FLTIMor3qvBxkAHfFplWe90SWbewprgGho_62SAjiuu3KQm_hKwn4d4m02RPFwgaoB8AdulRGZkhHt9NihnMdpWiqhow11WAq4FDYcXUW0j6rICHuBt_2FBbvURHw-cDLyDA5m2FsAVHLPK-wxShlacCS3ufHcMm-6w1celrhNeAr81T3rofWqtCO3loyYPAAmB0pZWrcBDQNw69NE0j2BOg',
  },
  {
    name: 'Alex Thompson',
    email: 'a.thomp@kinetic.ai',
    role: 'AI Engineer',
    status: 'Pending',
    statusClass: 'bg-surface-container-highest text-outline border-outline-variant/20',
    progress: 0,
    avatar: null,
  },
];

const navItems = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'route', label: 'Roadmaps' },
  { icon: 'group', label: 'Candidates', active: true, fill: true },
  { icon: 'menu_book', label: 'Curriculum' },
  { icon: 'leaderboard', label: 'Analytics' },
];

function Candidates() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div
      className="bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-8 h-16 fixed top-0 left-0 bg-[#0b1326]/60 backdrop-blur-xl z-40 shadow-[0_20px_50px_rgba(7,0,108,0.15)]">
        <div className="flex items-center gap-12">
          <span className="text-xl font-bold tracking-tight text-[#c0c1ff]">SkillPath AI</span>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Workspaces</a>
            <a className="text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Insights</a>
            <a className="text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Archive</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <button className="material-symbols-outlined hover:text-[#c0c1ff] transition-all">notifications</button>
            <button className="material-symbols-outlined hover:text-[#c0c1ff] transition-all">settings</button>
          </div>
          <button
            onClick={() => navigate('/upload-resumes')}
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-5 py-2 rounded-xl font-semibold active:scale-95 transition-all hover:brightness-110 text-sm"
          >
            Upload Resumes
          </button>
          <img
            alt="HR Manager Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwQRIQapWSbKPw1wj8Clugi-xhXjYAXy309BCJBG_IyRO0RQwFk7xg4aNGlBcyYsTy1G2EQddCIYBSi8o7K0g1t_nk_xGeRugWoANlWSl295JQzT8MVBkKYL0q4xeWWeaZDdrMAuOyJQgaYhDi8k8JiOzvxjIC2Qb8gQ622QyrYyv_nC47d_3JWw6nJhPeMDL2OXmMufLOHHil-VThJhLtVWWytR5MZEls6QAS9VMLoTBi8HXk0ctD3t_F4ObuFWRzpQjXTIwLgA"
          />
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 z-50 bg-[#131b2e] flex flex-col py-8">
        <div className="px-8 mb-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-white leading-none">The Kinetic Path</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-1">AI Orchestrator</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`relative flex items-center gap-4 px-6 py-3 transition-colors duration-200 ${
                item.active
                  ? 'text-[#c0c1ff] font-semibold bg-[#2d3449]/30 before:content-[""] before:absolute before:left-0 before:w-1 before:h-6 before:bg-[#c0c1ff] before:rounded-r-full'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-[#2d3449]'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={item.fill ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 mb-8">
          <button className="w-full py-3 rounded-xl bg-surface-container-highest border border-outline-variant/15 text-on-surface font-medium hover:bg-surface-bright transition-all flex items-center justify-center gap-2 text-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            New Workflow
          </button>
        </div>
        <footer className="space-y-1">
          {[{ icon: 'help_outline', label: 'Help Center' }, { icon: 'logout', label: 'Log Out' }].map((item) => (
            <a
              key={item.label}
              className="text-slate-500 hover:text-slate-300 flex items-center gap-4 px-6 py-3 transition-colors duration-200 hover:bg-[#2d3449] text-sm"
              href="#"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </footer>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-24 min-h-screen px-12 pb-12">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[3.5rem] font-black tracking-tight leading-[1.1] mb-2">Candidates</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Manage your talent pool and track training progress across active workspaces.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="bg-surface-container-low border-none rounded-2xl pl-12 pr-6 py-3 w-80 focus:ring-2 focus:ring-primary/50 text-on-surface placeholder-outline transition-all outline-none text-sm"
                placeholder="Search by name or role..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="p-3 rounded-2xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </header>

        {/* Bento Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="col-span-1 p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between h-40">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Total Talent</span>
            <span className="text-4xl font-black">1,284</span>
          </div>
          <div className="col-span-1 p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between h-40">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase">In Training</span>
            <span className="text-4xl font-black">412</span>
          </div>
          <div className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-surface-container-high to-surface-container-low flex items-center gap-8 h-40">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase block mb-1">Approval Velocity</span>
              <p className="text-sm text-outline mb-4">Your AI agent processed 42 profiles today.</p>
              <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
            </div>
          </div>
        </section>

        {/* Directory Table */}
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/30">
                {['Candidate', 'Assigned Role', 'Status', 'Skill Growth', 'Action'].map((col) => (
                  <th key={col} className="px-8 py-6 text-[11px] font-bold tracking-[0.1em] text-outline uppercase">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {candidates.map((c) => (
                <tr key={c.name} onClick={() => navigate('/candidate-detail')} className="hover:bg-surface-container-high/40 transition-colors group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      {c.avatar ? (
                        <img alt="Profile" className="w-10 h-10 rounded-xl object-cover" src={c.avatar} />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-outline">
                          <span className="material-symbols-outlined">person</span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-on-surface text-sm">{c.name}</p>
                        <p className="text-xs text-outline">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant text-sm">{c.role}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${c.statusClass}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${c.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-mono text-primary">{c.progress}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="material-symbols-outlined text-outline hover:text-on-surface transition-colors">more_horiz</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-8 py-6 bg-surface-container-high/20 border-t border-outline-variant/5 flex items-center justify-between">
            <p className="text-sm text-outline">
              Showing <span className="text-on-surface font-semibold">1-5</span> of 1,284 candidates
            </p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                    page === p ? 'bg-primary text-on-primary' : 'hover:bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary-container shadow-[0_20px_50px_rgba(7,0,108,0.3)] flex items-center justify-center active:scale-95 transition-all hover:shadow-[0_20px_60px_rgba(192,193,255,0.4)] z-50">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
      </button>
    </div>
  );
}

export default Candidates;
