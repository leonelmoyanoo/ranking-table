import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-points">Add Points</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;