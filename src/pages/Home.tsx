import RankingList from "../components/RankingList";
import type { Participant } from "../types";

interface HomeProps {
    participants: Participant[];
}

const Home = ({ participants }: HomeProps) => {
    return (
        <div>
            <h1>Ranking</h1>
            <RankingList title="Mejor Escuela" participants={participants} />
        </div>
    );
};

export default Home;