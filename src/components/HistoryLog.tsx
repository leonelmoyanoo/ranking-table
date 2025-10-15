
import type { PointHistory } from '../types';

interface Props {
  history: PointHistory[];
}

function HistoryLog({ history }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">History</h5>
        {history.length === 0 ? (
          <p className="text-muted">No activity yet.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {history.slice(0, 10).map(entry => (
              <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{entry.participantName} - {entry.emoji}</strong>
                  <br />
                  <small className="text-muted">
                    {entry.timestamp.toLocaleTimeString()}
                  </small>
                </div>
                <span className="badge bg-success rounded-pill">+{entry.pointsAdded}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HistoryLog;
