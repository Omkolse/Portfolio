import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { COMP_TYPES } from '../../types';

export default function CompetitionManager({ onClose }) {
    const { addCompetition } = useGame();
    const [name, setName] = useState('');
    const [type, setType] = useState(COMP_TYPES.TIME_PENALTY);
    const [penaltyValue, setPenaltyValue] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        addCompetition({
            name,
            type,
            penaltyValue: Number(penaltyValue)
        });

        setName('');
        onClose();
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Competition</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Competition Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g., Circuit Sprint"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scoring Type</label>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value={COMP_TYPES.TIME_PENALTY}>Time + Penalties</option>
                        <option value={COMP_TYPES.POINTS}>Points Based (Coming Soon)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Penalty Value (Seconds)</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={penaltyValue}
                        onChange={(e) => setPenaltyValue(e.target.value)}
                        min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Seconds added per penalty.</p>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                    >
                        Create Competition
                    </button>
                </div>
            </form>
        </div>
    );
}
