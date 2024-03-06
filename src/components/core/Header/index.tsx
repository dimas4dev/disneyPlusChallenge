import { useState } from 'react';
import DisneyIcon from '../../../assets/DisneyIcon.svg';
import { InputComponent } from '../Input';
import { Link } from 'wouter';
import { useInputChange } from '../../../hooks/handleInputChange';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../../hooks/useAuth';

interface HeaderProps {
    isLogin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLogin = false }) => {

    const { inputs, handleInputChange } = useInputChange();
    const { logout } = useAuth();


    const linksHeader = [
        { name: 'Home', path: '/' },
        { name: 'Watchlist', path: '/watchlist' },
        { name: 'Originals', path: '/originals' },
    ]

    const { search } = inputs;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {isLogin ? (
                <header className="text-white p-4">
                    <div className="flex justify-between items-center">
                        <img src={DisneyIcon} alt="DisneyIcon" className="h-12 md:h-24" />
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3BottomLeftIcon className="h-8 w-8" />}
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <InputComponent
                                type='text'
                                placeholder='Ingresa lo que deseas buscar'
                                onChange={handleInputChange}
                                value={search}
                                name='search'
                                id='searchInput'
                            />
                        </div>
                        {isMenuOpen ?
                            <nav className={`${isMenuOpen ? 'fixed inset-0 z-50' : 'hidden'} md:hidden bg-opacity-75`}>
                                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0 bg-black md:bg-transparent">
                                    <div className="absolute top-0 right-0 p-5">
                                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                            <XMarkIcon className="h-8 w-8 text-white" />
                                        </button>
                                    </div>
                                    {linksHeader.map((link, index) => (
                                        <li key={index} className="md:ml-4">
                                            <Link href={link.path}>{link.name}</Link>
                                        </li>
                                    ))}
                                    <li ><a href="#!" onClick={() => logout()}>Cerrar Sesión</a></li>
                                </ul>
                            </nav> :
                            <nav className="hidden md:flex space-x-4">
                                {linksHeader.map((link, index) => (
                                    <Link key={index} href={link.path}>{link.name}</Link>
                                ))}
                                <Link href="#!" onClick={() => logout()}>Cerrar Sesión</Link>
                            </nav>
                        }
                    </div>
                </header>
            ) :
                <header className='flex justify-center items-center h-24'>
                    <img className="h-auto max-h-full" src={DisneyIcon} alt="DisneyIcon" />
                </header>}
        </>
    )
}

