import React, { createContext, useContext, useEffect, useState } from 'react';
import { calculateScore, parseTime } from '../utils/scoreCalculator';
import { STATUS } from '../types';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [competitions, setCompetitions] = useState([]);
    const [participants, setParticipants] = useState([]);

    // Load initial state from localStorage
    useEffect(() => {
        const storedComps = localStorage.getItem('competitions');
        const storedParts = localStorage.getItem('participants');
        if (storedComps) setCompetitions(JSON.parse(storedComps));
        if (storedParts) setParticipants(JSON.parse(storedParts));
    }, []);

    // Sync with other tabs using BroadcastChannel
    useEffect(() => {
        const channel = new BroadcastChannel('robo_comp_updates');

        channel.onmessage = (event) => {
            if (event.data.type === 'UPDATE_ALL') {
                const storedComps = localStorage.getItem('competitions');
                const storedParts = localStorage.getItem('participants');
                if (storedComps) setCompetitions(JSON.parse(storedComps));
                if (storedParts) setParticipants(JSON.parse(storedParts));
            }
        };

        return () => channel.close();
    }, []);

    // Persist and Notify helper
    const saveAndNotify = (newComps, newParts) => {
        if (newComps) {
            localStorage.setItem('competitions', JSON.stringify(newComps));
            setCompetitions(newComps);
        }
        if (newParts) {
            localStorage.setItem('participants', JSON.stringify(newParts));
            setParticipants(newParts);
        }

        const channel = new BroadcastChannel('robo_comp_updates');
        channel.postMessage({ type: 'UPDATE_ALL' });
        channel.close();
    };

    const addCompetition = (comp) => {
        const newComps = [...competitions, { ...comp, id: crypto.randomUUID() }];
        saveAndNotify(newComps, null);
    };

    const deleteCompetition = (id) => {
        const newComps = competitions.filter(c => c.id !== id);
        const newParts = participants.filter(p => p.competitionId !== id);
        saveAndNotify(newComps, newParts);
    };

    const addParticipant = (data, compId) => {
        const rawSeconds = parseTime(data.timeString);
        const comp = competitions.find(c => c.id === compId);
        const totalSeconds = calculateScore(rawSeconds, data.penalties, comp?.penaltyValue || 5);

        const newParticipant = {
            id: crypto.randomUUID(),
            competitionId: compId,
            name: data.name,
            timeString: data.timeString,
            baseTime: rawSeconds,
            penalties: Number(data.penalties),
            totalSeconds,
            status: data.status,
        };

        const newParts = [...participants, newParticipant];
        saveAndNotify(null, newParts);
    };

    const updateParticipant = (id, data) => {
        const newParts = participants.map(p => {
            if (p.id !== id) return p;

            const rawSeconds = parseTime(data.timeString);
            const comp = competitions.find(c => c.id === p.competitionId);
            const totalSeconds = calculateScore(rawSeconds, data.penalties, comp?.penaltyValue || 5);

            return {
                ...p,
                ...data,
                baseTime: rawSeconds,
                totalSeconds,
            };
        });
        saveAndNotify(null, newParts);
    };

    const deleteParticipant = (id) => {
        const newParts = participants.filter(p => p.id !== id);
        saveAndNotify(null, newParts);
    };

    const resetData = () => {
        saveAndNotify([], []);
    };

    return (
        <GameContext.Provider value={{
            competitions,
            participants,
            addCompetition,
            deleteCompetition,
            addParticipant,
            updateParticipant,
            deleteParticipant,
            resetData
        }}>
            {children}
        </GameContext.Provider>
    );
};
