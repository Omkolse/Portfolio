import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { STATUS } from '../../types';

export default function ParticipantForm({ competitionId, existingId, onClose }) {
    const { participants, addParticipant, updateParticipant } = useGame();

    const [formData, setFormData] = useState({
        name: '',
        timeString: '',
        penalties: 0,
        status: STATUS.COMPLETED
    });

    useEffect(() => {
        if (existingId) {
            const p = participants.find(p => p.id === existingId);
            if (p) {
                setFormData({
                    name: p.name,
                    timeString: p.timeString,
                    penalties: p.penalties,
                    status: p.status
                });
            }
        }
    }, [existingId, participants]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingId) {
            updateParticipant(existingId, formData);
        } else {
            addParticipant(formData, competitionId);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">
                        {existingId ? 'Edit Participant' : 'New Participant'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name / Team</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time (MM:SS)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                                placeholder="00:00"
                                value={formData.timeString}
                                onChange={e => setFormData({ ...formData, timeString: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Penalties</label>
                            <input
                                type="number"
                                min="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={formData.penalties}
                                onChange={e => setFormData({ ...formData, penalties: Number(e.target.value) })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.status}
                            onChange={e => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value={STATUS.ACTIVE}>Running</option>
                            <option value={STATUS.COMPLETED}>Completed</option>
                            <option value={STATUS.DISQUALIFIED}>Disqualified</option>
                        </select>
                    </div>

                    <div className="pt-4 flex gap-3">
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
                            Save Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
