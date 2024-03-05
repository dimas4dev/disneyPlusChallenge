import { useInputChange } from "../../hooks/handleInputChange";
import { Button } from "../core/Button";
import { InputComponent } from "../core/Input";

export const Login = () => {
    const { value, onChange } = useInputChange();

    return (
        <div className="bg-white h-96 w-96 flex justify-center items-center shadow-xl rounded-lg p-6 mx-autoflex flex-col items-center">
            <InputComponent type="email" placeholder="Ingresa tu Email" onChange={onChange} value={value} id="emailInput" style={{ margin: "12px" }} />
            <InputComponent type="password" placeholder="Ingresa tu contraseña" onChange={onChange} value={value} id="passwordInput" />
            <Button text="Iniciar Sesión" style={{ margin: "12px" }} />
        </div>
    );
};
