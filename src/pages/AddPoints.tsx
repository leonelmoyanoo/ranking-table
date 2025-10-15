import AddPointsForm from "../components/AddPointsForm";
import type { Participant } from "../types";

interface AddPointsProps {
    participants: Participant[];
    onAddPoints: (participantId: string, pointKey: string) => void;
}

const AddPoints = ({ participants, onAddPoints }: AddPointsProps) => {
    return (
        <div>
            <h1>Add Points</h1>
            <AddPointsForm participants={participants} onAddPoints={onAddPoints} />
        </div>
    );
};

export default AddPoints;