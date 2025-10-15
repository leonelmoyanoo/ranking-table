import {useState} from 'react';
import type {Participant, PointHistory, School, Instructor} from './types';
import {Point} from './types';
import RankingList from './components/RankingList';
import AddPointsForm from './components/AddPointsForm';
import HistoryLog from './components/HistoryLog';
import EscudoA from './assets/escudo1.png';
import EscudoB from './assets/escudo2.png';
import './App.css';

function App() {
    const [schools, setSchools] = useState<School[]>([
        {id: '1', name: 'Escuela A', logo: EscudoA as string, points: 0},
        {id: '2', name: 'Escuela B', logo: EscudoB as string, points: 0},
    ]);
    const [instructor, setInstructor] = useState<Instructor[]>([
        {id: '1', name: 'Mariano Martinez', school: schools[0], points: 0},
        {id: '2', name: 'Facundo Fernandez', school: schools[1], points: 0},
    ]);
    const [participants, setParticipants] = useState<Participant[]>([
        {id: '1', name: 'John Doe', points: 0, instructor: instructor[0]},
        {id: '2', name: 'Jane Smith', points: 0, instructor: instructor[0]},
        {id: '3', name: 'Peter Jones', points: 0, instructor: instructor[1]},
        {id: '4', name: 'Mary Johnson', points: 0, instructor: instructor[1]},
    ]);
    const [history, setHistory] = useState<PointHistory[]>([]);

    const addPoints = (participantId: string, pointsToAdd: Point) => {
        const targetParticipant = participants.find(p => p.id === participantId);

        if (!targetParticipant) {
            return; 
        }

        const pointKey = Point[pointsToAdd];

        setParticipants(prevParticipants =>
            prevParticipants.map(p =>
                p.id === participantId
                    ? { ...p, points: p.points + pointsToAdd }
                    : p
            )
        );

        setInstructor(prevInstructors =>
            prevInstructors.map(inst =>
                inst.id === targetParticipant.instructor.id
                    ? { ...inst, points: inst.points + pointsToAdd }
                    : inst
            )
        );

        setSchools(prevSchools =>
            prevSchools.map(school =>
                school.id === targetParticipant.instructor.school.id
                    ? { ...school, points: school.points + pointsToAdd }
                    : school
            )
        );

        setHistory(prevHistory => [
            {
                id: new Date().toISOString() + targetParticipant.name,
                participantId,
                participantName: targetParticipant.name,
                pointsAdded: pointsToAdd,
                timestamp: new Date(),
                emoji: pointKey
            },
            ...prevHistory,
        ]);
    };

    return (
        <div className="row d-flex justify-content-center align-items-center">
            <h1 className="mb-4 text-center">Ranking</h1>
            <div className="row">
                <div className="col-4">
                    <RankingList title={"Mejor Escuela"} participants={schools}/>
                </div>
                <div className="col-4">
                    <RankingList title={"Mejor Instructor"} participants={instructor}/>
                </div>
                <div className="col-4">
                    <RankingList title={"Mejor Competidor"} participants={participants}/>
                </div>
                <div className="col-3">
                    <div className="sticky-top">
                        <AddPointsForm participants={participants} onAddPoints={addPoints}/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sticky-top">
                        <HistoryLog history={history.slice(0, 6)}/>
                        {history.length > 6 && (
                            <button className="btn btn-link" onClick={() => alert('View more history!')}>
                                View More
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;