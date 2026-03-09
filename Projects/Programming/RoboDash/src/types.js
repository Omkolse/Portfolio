/**
 * @typedef {Object} Competition
 * @property {string} id - Unique identifier (UUID)
 * @property {string} name - Name of the competition (e.g., "Circuit Sprint")
 * @property {string} type - "TIME_PENALTY" | "POINTS"
 * @property {number} penaltyValue - Time in seconds added per penalty (default 5)
 */

/**
 * @typedef {Object} Participant
 * @property {string} id - Unique identifier (UUID)
 * @property {string} competitionId - ID of the competition they are in
 * @property {string} name - Name of the participant or team
 * @property {string} timeString - Raw input time string (e.g., "14:07")
 * @property {number} rawSeconds - Parsed time in seconds
 * @property {number} penalties - Number of penalties
 * @property {number} totalSeconds - Final calculated score (lower is better for time trials)
 * @property {string} status - "ACTIVE" | "DISQUALIFIED" | "COMPLETED"
 */

export const COMP_TYPES = {
    TIME_PENALTY: "TIME_PENALTY",
    POINTS: "POINTS",
};

export const STATUS = {
    ACTIVE: "ACTIVE",
    DISQUALIFIED: "DISQUALIFIED",
    COMPLETED: "COMPLETED",
};
