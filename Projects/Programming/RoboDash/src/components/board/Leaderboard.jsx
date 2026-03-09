import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, AlertTriangle, Download } from 'lucide-react';
import { formatTime } from '../../utils/scoreCalculator';
import { generatePDF } from '../../utils/pdfGenerator';

export default function Leaderboard() {
    const { competitions, participants } = useGame();
    const [activeCompId, setActiveCompId] = useState(null);

    // Auto-select first competition if none selected
    useEffect(() => {
        if (!activeCompId && competitions.length > 0) {
            setActiveCompId(competitions[0].id);
        }
    }, [competitions, activeCompId]);

    const activeComp = competitions.find(c => c.id === activeCompId);

    const sortedParticipants = participants
        .filter(p => p.competitionId === activeCompId)
        .sort((a, b) => {
            // Disqualified always last
            if (a.status === 'DISQUALIFIED' && b.status !== 'DISQUALIFIED') return 1;
            if (a.status !== 'DISQUALIFIED' && b.status === 'DISQUALIFIED') return -1;

            // Sort by total seconds (Ascending)
            return a.totalSeconds - b.totalSeconds;
        });

    const handleExport = () => {
        if (activeComp) {
            generatePDF(activeComp, sortedParticipants);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-black pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

            {/* Header / Tabs */}
            <div className="relative z-10 p-6 flex justify-between items-center border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <img src="/logo.jpg" alt="DRAIC" className="w-12 h-12 object-contain invert" />
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                            ROBO<span className="text-white">DASH</span>
                        </h1>
                        <p className="text-xs text-slate-400 font-mono tracking-[0.3em] uppercase">Innovate Iterate Conquer</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleExport}
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors text-slate-400 hover:text-white"
                        title="Export PDF"
                    >
                        <Download size={20} />
                    </button>

                    <div className="flex gap-4">
                        {competitions.map(comp => (
                            <button
                                key={comp.id}
                                onClick={() => setActiveCompId(comp.id)}
                                className={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 border ${activeCompId === comp.id
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                                    : 'bg-transparent border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {comp.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leaderboard Content */}
            <div className="relative z-10 max-w-6xl mx-auto p-8">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 mb-4">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-4">Team</div>
                    <div className="col-span-2 text-right">Time</div>
                    <div className="col-span-2 text-right">Penalty</div>
                    <div className="col-span-3 text-right">Total Score</div>
                </div>

                <div className="space-y-3">
                    <AnimatePresence>
                        {sortedParticipants.map((p, index) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                                className={`
                  relative grid grid-cols-12 gap-4 items-center px-6 py-4 rounded-xl border border-white/5 
                  ${p.status === 'DISQUALIFIED' ? 'bg-red-900/10 border-red-500/30' :
                                        index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-transparent border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]' :
                                            index === 1 ? 'bg-white/5 border-white/20' :
                                                index === 2 ? 'bg-white/5 border-white/10' :
                                                    'bg-slate-800/50 hover:bg-slate-800/80 transition-colors'
                                    }
                `}
                            >
                                {/* Decoration for Top 3 */}
                                {index < 3 && p.status !== 'DISQUALIFIED' && (
                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full bg-current text-yellow-500"
                                        style={{ color: index === 0 ? '#eab308' : index === 1 ? '#94a3b8' : '#b45309' }}
                                    />
                                )}

                                <div className="col-span-1 font-black text-xl text-slate-400 font-mono">
                                    {p.status === 'DISQUALIFIED' ? 'DQ' : `#${index + 1}`}
                                </div>

                                <div className="col-span-4">
                                    <h3 className={`text-lg font-bold flex items-center gap-2 ${p.status === 'DISQUALIFIED' ? 'text-red-400 line-through decoration-2' : 'text-white'}`}>
                                        {p.name}
                                        {index === 0 && p.status !== 'DISQUALIFIED' && <Trophy size={16} className="text-yellow-400 animate-pulse" />}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <span className={`w-2 h-2 rounded-full ${p.status === 'ACTIVE' ? 'bg-blue-500 animate-pulse' :
                                            p.status === 'COMPLETED' ? 'bg-green-500' : 'bg-red-500'
                                            }`}></span>
                                        {p.status}
                                    </div>
                                </div>

                                <div className="col-span-2 text-right font-mono text-slate-300 flex items-center justify-end gap-2">
                                    <Clock size={14} className="text-slate-600" />
                                    {p.timeString || "00:00"}
                                </div>

                                <div className="col-span-2 text-right font-mono text-red-300 flex items-center justify-end gap-2">
                                    {p.penalties > 0 && <AlertTriangle size={14} className="text-red-500" />}
                                    {p.penalties > 0 ? `+${p.penalties * (activeComp?.penaltyValue || 5)}s` : '-'}
                                </div>

                                <div className="col-span-3 text-right">
                                    <div className="text-2xl font-black text-cyan-400 font-mono tracking-tighter shadow-cyan-500/50">
                                        {formatTime(p.totalSeconds)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {sortedParticipants.length === 0 && (
                        <div className="text-center py-20 text-slate-600">
                            <p className="text-xl">Waiting for participants...</p>
                            <div className="animate-pulse-slow mt-4 mx-auto w-12 h-1 bg-blue-500/50 rounded"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
