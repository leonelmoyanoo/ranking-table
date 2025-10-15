import {useLayoutEffect, useRef} from 'react';
import type {Participant} from '../types';

interface Props {
    participant: Participant,
    rank: number
}

const ITEM_HEIGHT = 80; // Corresponds to the height set in App.css

function ParticipantItem({participant, rank}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translateY(${rank * ITEM_HEIGHT}px)`;
        }
    }, [rank]);

    return (
        <div ref={ref} className="participant-item">
            <div className="participant-rank">{rank + 1}</div>
            <div className="participant-name">{participant.name}</div>
            <div className="school-name">{participant.instructor.school.name}</div>
            <div className="participant-points">{participant.points} pts</div>
        </div>
    );
}

export default ParticipantItem;
