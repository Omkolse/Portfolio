import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Plus, Trash2, Edit2, Search, Download } from 'lucide-react';
import ParticipantForm from './ParticipantForm';
import { formatTime } from '../../utils/scoreCalculator';
import { generatePDF } from '../../utils/pdfGenerator';

export default function ParticipantManager({ competition }) {
    const { participants, deleteParticipant } = useGame();
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const compParticipants = participants
        .filter(p => p.competitionId === competition.id)
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.totalSeconds - b.totalSeconds);

    const handleExport = () => {
        generatePDF(competition, compParticipants);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{competition.name}</h2>
                    <p className="text-sm text-gray-500">Manage participants and scores</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors border border-gray-200"
                    >
                        <Download size={18} /> Export PDF
                    </button>
                    <button
                        onClick={() => { setEditingId(null); setShowForm(true); }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                    >
                        <Plus size={18} /> Add Participant
                    </button>
                </div>
            </div>

            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search participants..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Rank</th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Penalties</th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {compParticipants.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="px-6 py-8 text-center text-gray-400">
                                    No participants yet. Add one to get started.
                                </td>
                            </tr>
                        ) : (
                            compParticipants.map((p, index) => (
                                <tr key={p.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">#{index + 1}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                                    <td className="px-6 py-4 text-gray-600 font-mono">{p.timeString}</td>
                                    <td className="px-6 py-4 text-gray-600 font-mono">{p.penalties}</td>
                                    <td className="px-6 py-4 font-bold text-blue-600 font-mono">{formatTime(p.totalSeconds)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${p.status === 'DISQUALIFIED' ? 'bg-red-100 text-red-800' :
                                            p.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => { setEditingId(p.id); setShowForm(true); }}
                                                className="p-1 text-gray-400 hover:text-blue-600"
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => deleteParticipant(p.id)}
                                                className="p-1 text-gray-400 hover:text-red-600"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <ParticipantForm
                    competitionId={competition.id}
                    existingId={editingId}
                    onClose={() => setShowForm(false)}
                />
            )}
        </div>
    );
}
