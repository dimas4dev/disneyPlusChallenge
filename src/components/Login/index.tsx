import { useInputChange } from '../../hooks/handleInputChange';
import { Button } from '../core/Button';
import { InputComponent } from '../core/Input';

export const Login = () => {
    const { inputs, handleInputChange } = useInputChange();

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
            <Button text="Iniciar Sesión" style={{ margin: '12px' }} />
        </div>
    );
};
