import {useLayoutEffect, useRef} from 'react';

interface Props {
    name: string,
    rank: number,
    points: number,
    key?: string
    subtitle?: string,
    logo?: string,
}

const ITEM_HEIGHT = 80; // Corresponds to the height set in App.css

function RankingItem({name, rank, points, key, subtitle = '', logo = ''}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translateY(${rank * ITEM_HEIGHT}px)`;
        }
    }, [rank]);

    return (
        <div ref={ref} className="participant-item" key={key}>
            {logo && <img src={logo} alt={`Logo de ${name}`} className="me-2" style={{width: '40px', height: '40px'}}/>}
            <div className="participant-rank">{rank + 1}</div>
            <div className="participant-name">{name}</div>
            <div className="school-name">{subtitle}</div>
            <div className="participant-points">{points} pts</div>
        </div>
    );
}

export default RankingItem;
