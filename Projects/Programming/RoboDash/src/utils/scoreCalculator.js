/**
 * Parses a time string "MM:SS" into total seconds.
 * @param {string} timeStr - The time string (e.g., "14:07")
 * @returns {number} - Total seconds
 */
export const parseTime = (timeStr) => {
    if (!timeStr) return 0;
    const parts = timeStr.split(":");
    if (parts.length === 2) {
        const minutes = parseInt(parts[0], 10) || 0;
        const seconds = parseInt(parts[1], 10) || 0;
        return minutes * 60 + seconds;
    }
    return 0; // Invalid format
};

/**
 * Calculates the total score based on time and penalties.
 * @param {number} baseSeconds - The raw time in seconds
 * @param {number} penalties - Number of penalties
 * @param {number} penaltyValue - Seconds per penalty
 * @returns {number} - Total calculated score
 */
export const calculateScore = (baseSeconds, penalties, penaltyValue = 5) => {
    return baseSeconds + (penalties * penaltyValue);
};

/**
 * Formats seconds back into "MM:SS" string.
 * @param {number} totalSeconds 
 * @returns {string}
 */
export const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
