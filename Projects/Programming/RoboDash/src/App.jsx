import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import AdminDashboard from './components/admin/AdminDashboard';
import Leaderboard from './components/board/Leaderboard';

function App() {
    return (
        <GameProvider>
            <Router>
                <Routes>
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/board" element={<Leaderboard />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </GameProvider>
    );
}

function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center space-y-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow decoration-slice"></div>

            <div className="z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <img src="/logo.jpg" alt="DRAIC Logo" className="w-24 h-24 object-contain invert drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    <span className="text-3xl font-bold tracking-widest text-white border-l-2 border-white/20 pl-4">DRAIC</span>
                </div>
                <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                    ROBO<span className="text-white">DASH</span>
                </h1>
                <p className="text-slate-400 text-xl font-light tracking-wide max-w-lg mx-auto uppercase">
                    Innovate • Iterate • Conquer
                </p>
            </div>

            <div className="z-10 flex gap-8">
                <Link
                    to="/admin"
                    target="_blank"
                    className="group relative px-8 py-5 bg-slate-800 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                >
                    <div className="absolute inset-0 bg-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300">Admin Panel</span>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Control Center</p>
                </Link>

                <Link
                    to="/board"
                    target="_blank"
                    className="group relative px-8 py-5 bg-slate-800 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                >
                    <div className="absolute inset-0 bg-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-2xl font-bold text-purple-400 group-hover:text-purple-300">Leaderboard</span>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Live Display</p>
                </Link>
            </div>

            <p className="z-10 text-slate-600 text-sm font-mono mt-12">
                System Status: <span className="text-green-500">ONLINE</span> • Sync: <span className="text-green-500">ACTIVE</span>
            </p>
        </div>
    );
}

export default App;
