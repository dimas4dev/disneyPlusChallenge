import { toast } from 'react-toastify';
import { useLocalStorage } from 'usehooks-ts'

import { useAuth } from '../../hooks/useAuth';
import { useInputChange } from '../../hooks/handleInputChange';
import { Button } from '../core/Button';
import { InputComponent } from '../core/Input';


export const Login = () => {
    const { inputs, handleInputChange } = useInputChange();
    const { login } = useAuth();
    const [emailStorage, setEmailStorage] = useLocalStorage<string>('email', '');

    const [, setIsLoggedIn] = useLocalStorage<boolean>('isLoggedIn', false);
    const handleLogin = async () => {
        const { email, password } = inputs;
        try {
            const request = await fetch('http://localhost:3000/users');
            const users = await request.json();
            const user = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);

            setEmailStorage(user.email);
            setIsLoggedIn(true);


            if (emailStorage || user) {
                login();
                toast.success('Sesion Iniciada', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.error('Usuario Y/O Contraseña Invalidos', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (error) {
            toast.error('Usuario Y/O Contraseña Invalidos', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <div className="bg-white h-96 w-96 flex justify-center items-center shadow-xl rounded-lg p-6 mx-auto flex flex-col items-center">
            <InputComponent
                name="email"
                type="email"
                placeholder="Ingresa tu Email"
                onChange={handleInputChange}
                value={inputs.email}
                id="emailInput"
                style={{ margin: '12px' }}
            />
            <InputComponent
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={handleInputChange}
                value={inputs.password}
                id="passwordInput"
                style={{ margin: '12px' }}
            />
            <Button text="Iniciar Sesión" style={{ margin: '12px' }} onClick={handleLogin} />
        </div>
    );
};
