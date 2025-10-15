import HistoryLog from "../components/HistoryLog";
import type { PointHistory } from "../types";

interface HistoryProps {
    history: PointHistory[];
}

const History = ({ history }: HistoryProps) => {
    return (
        <div>
            <h1>History</h1>
            <HistoryLog history={history} />
        </div>
    );
};

export default History;