import DisneyIcon from '../../assets/DisneyIcon.svg';

export const Header: React.FC = ({ isLogin = false }) => {
    return (
        <>
            {isLogin ? (
                <header className="flex justify-between items-center p-4">
                    <img src={DisneyIcon} alt="DisneyIcon" className="h-10" />
                    <nav>
                        <ul className="flex space-x-4">
                            <li>Home</li>
                            <li>Search</li>
                            <li>Watchlist</li>
                            <li>Movies</li>
                            <li>Series</li>
                            <li>Originals</li>
                            {/* Agrega aquí más elementos de navegación según sea necesario */}
                        </ul>
                    </nav>
                </header>
            ) :
                <header className='flex justify-center items-center h-16'> {/* Altura de ejemplo, ajusta según tus necesidades */}
                    <img src={DisneyIcon} alt="DisneyIcon" />
                </header>}
        </>
    )
}