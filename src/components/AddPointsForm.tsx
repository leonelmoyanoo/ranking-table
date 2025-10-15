import {useState} from 'react';
import type {Participant} from '../types';
import {Point} from '../types';

interface Props {
    participants: Participant[];
    onAddPoints: (participantId: string, points: Point) => void;
}

function AddPointsForm({participants, onAddPoints}: Props) {
    const [firstParticipant, setFirstParticipant] = useState<string>('');
    const [secondParticipant, setSecondParticipant] = useState<string>('');
    const [thirdParticipant, setThirdParticipant] = useState<string>('');
    const [fourthParticipant, setFourthParticipant] = useState<string>('');
    const firstPlace = Point['🥇'];
    const secondPlace = Point['🥈'];
    const thirdPlace = Point['🥉'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (firstParticipant) {
            onAddPoints(firstParticipant, firstPlace);
            setFirstParticipant('');
        }
        if (secondParticipant) {
            onAddPoints(secondParticipant, secondPlace);
            setSecondParticipant('');
        }
        if (thirdParticipant) {
            onAddPoints(thirdParticipant, thirdPlace);
            setThirdParticipant('');
        }
        if (fourthParticipant) {
            onAddPoints(fourthParticipant, thirdPlace);
            setFourthParticipant('');
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Add Points</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="first-participant" className="form-label">Primer lugar</label>
                        <select
                            id="first-participant"
                            className="form-select"
                            value={firstParticipant}
                            onChange={(e) => setFirstParticipant(e.target.value)}
                        >
                            <option value=""></option>
                            {participants.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>


                        <label htmlFor="second-participant" className="form-label">Segundo lugar</label>
                        <select
                            id="second-participant"
                            className="form-select"
                            value={secondParticipant}
                            onChange={(e) => setSecondParticipant(e.target.value)}
                        >
                            <option value=""></option>
                            {participants.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>


                        <label htmlFor="third-participant" className="form-label">Tercer lugar</label>
                        <select
                            id="third-participant"
                            className="form-select"
                            value={thirdParticipant}
                            onChange={(e) => setThirdParticipant(e.target.value)}
                        >
                            <option value=""></option>
                            {participants.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>


                        <label htmlFor="fourth-participant" className="form-label">Tercer lugar (opcional)</label>
                        <select
                            id="fourth-participant"
                            className="form-select"
                            value={fourthParticipant}
                            onChange={(e) => setFourthParticipant(e.target.value)}
                        >
                            <option value=""></option>
                            {participants.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddPointsForm;