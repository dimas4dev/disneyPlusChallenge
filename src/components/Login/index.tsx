import { useInputChange } from '../../hooks/handleInputChange';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../core/Button';
import { InputComponent } from '../core/Input';

export const Login = () => {
    const { inputs, handleInputChange } = useInputChange();
    const { login } = useAuth(); // Aquí se usa el hook correctamente

    const handleLogin = async () => {
        const { email, password } = inputs;
        try {
            const request = await fetch('http://localhost:3000/users');
            const users = await request.json();
            const user = users.find((user: any) => user.email === email && user.password === password);
            if (user) {
                login();
                console.log(import.meta.env.JWT_KEY);
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
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
