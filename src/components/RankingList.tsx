import {useMemo} from 'react';
import type {Participant, School, Instructor} from '../types';
import RankingItem from "./RankingItem";

interface Props {
    title: string;
    participants: Participant[] | School[] | Instructor[];
}

function RankingList({title, participants}: Props) {
    const sortedParticipants = useMemo(() => {
        return [...participants].sort((a, b) => b.points - a.points);
    }, [participants]);

    const rankMap = useMemo(() => {
        const map = new Map<string, number>();
        sortedParticipants.forEach((p, index) => {
            map.set(p.id, index);
        });
        return map;
    }, [sortedParticipants]);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="position-relative">
                    {participants.map(participant => (
                        <RankingItem
                            name={participant.name}
                            rank={rankMap.get(participant.id)!}
                            points={participant.points}
                            key={participant.id}
                            logo={'logo' in participant ? participant.logo : 'school' in participant ? participant.school?.logo : participant.instructor.school?.logo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RankingList;
