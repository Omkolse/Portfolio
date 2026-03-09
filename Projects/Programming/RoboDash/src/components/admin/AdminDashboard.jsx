import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Trash2, Plus, Trophy, Users, Download } from 'lucide-react';
import CompetitionManager from './CompetitionManager';
import ParticipantManager from './ParticipantManager';
import { generatePDF } from '../../utils/pdfGenerator';

export default function AdminDashboard() {
    const { competitions, deleteCompetition } = useGame();
    const [selectedCompId, setSelectedCompId] = useState(null);
    const [showCompForm, setShowCompForm] = useState(false);

    const selectedComp = competitions.find(c => c.id === selectedCompId);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Trophy className="text-blue-600" /> Admin
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <button
                        onClick={() => { setSelectedCompId(null); setShowCompForm(true); }}
                        className="w-full flex items-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors"
                    >
                        <Plus size={18} /> New Competition
                    </button>

                    <div className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Competitions
                    </div>

                    {competitions.length === 0 && (
                        <p className="text-sm text-gray-400 italic px-4">No competitions yet.</p>
                    )}

                    {competitions.map(comp => (
                        <div key={comp.id} className="group relative">
                            <button
                                onClick={() => { setSelectedCompId(comp.id); setShowCompForm(false); }}
                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${selectedCompId === comp.id
                                    ? 'bg-gray-900 text-white'
                                    : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                {comp.name}
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); deleteCompetition(comp.id); }}
                                className="absolute right-2 top-3 p-1 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Delete Competition"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                {showCompForm ? (
                    <CompetitionManager onClose={() => setShowCompForm(false)} />
                ) : selectedComp ? (
                    <ParticipantManager competition={selectedComp} />
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                        <Users size={64} className="mb-4 opacity-20" />
                        <p className="text-xl">Select a competition to manage participants</p>
                    </div>
                )}
            </div>
        </div>
    );
}
