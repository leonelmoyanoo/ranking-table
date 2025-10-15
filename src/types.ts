export interface School {
    id: string;
    name: string;
    logo: string;
    points: number;
}

export interface Instructor {
    id: string;
    name: string;
    school: School;
    points: number;
    logo?: string;
}

export interface Participant {
    id: string;
    name: string;
    points: number;
    instructor: Instructor;
}

export interface PointHistory {
    id: string;
    participantId: string;
    participantName: string;
    pointsAdded: number;
    timestamp: Date;
    emoji: string;
}

export enum Point {
    '🥇' = 10,
    '🥈' = 5,
    '🥉' = 1
}