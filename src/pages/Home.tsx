import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { HOST } from '../config/index.mts';

interface SheepFormData {
    sheep_id: string;
    first_name: string;
    last_name: string;
    second_last_name: string;
    date_of_birth: string;
    gender: string;
    guardian: string;
    relationship: string;
    guardian_cell: string;
    sheepherd: string;
    leader_12: string;
    locality: string;
    vision_status: string;
    assigned_leader: string;
    timeline: string;
    role: string;
}

export const Home: React.FC = () => {
    const [user] = useLocalStorage<object>('user', {})
    const [formData, setFormData] = useState<SheepFormData>({
        sheep_id: '',
        first_name: '',
        last_name: '',
        second_last_name: '',
        date_of_birth: '',
        gender: '',
        guardian: '',
        relationship: '',
        guardian_cell: '',
        sheepherd: '7',
        leader_12: '',
        locality: '',
        vision_status: '',
        assigned_leader: (user as { id: string }).id,
        timeline: '1',
        role: '5',
    });

    const [token] = useLocalStorage<string>('token', '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `${HOST}/sheep`;
        console.log('formData:', formData);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            // Aquí podrías manejar la respuesta exitosa, como limpiar el formulario o mostrar un mensaje
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error en la interfaz
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-8 bg-white rounded shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Celular Oveja" name="sheep_id" value={formData.sheep_id} onChange={handleChange} />
                    <InputField label="Primer Nombre" name="first_name" value={formData.first_name} onChange={handleChange} />
                    <InputField label="Primer Apellido" name="last_name" value={formData.last_name} onChange={handleChange} />
                    <InputField label="Segundo Apellido" name="second_last_name" value={formData.second_last_name} onChange={handleChange} />
                    <InputField label="Dia de nacimiento" type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                    <SelectField label="Genero" name="gender" value={formData.gender} options={['', 'Femenino', 'Masculino']} onChange={handleChange} />
                    <InputField label="Acudiente" name="guardian" value={formData.guardian} onChange={handleChange} />
                    <InputField label="Relacion" name="relationship" value={formData.relationship} onChange={handleChange} />
                    <InputField label="Celular Acudiente" name="guardian_cell" value={formData.guardian_cell} onChange={handleChange} />
                    <SelectFieldLeader
                        label="Leader 12"
                        name="leader_12"
                        value={formData.leader_12}
                        onChange={handleChange}
                        options={leaderOptions}
                    />
                    <LocalitySelect
                        label="Localidad"
                        name="locality"
                        selectedValue={formData.locality}
                        onChange={handleChange}
                    />
                    <VisionStatusSelect
                        label="Estado de Visión"
                        name="vision_status"
                        selectedValue={formData.vision_status}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

interface InputFieldProps {
    label: string;
    type?: React.HTMLInputTypeAttribute;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', name, value, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900">
            {label}:
        </label>
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
    </div>
);

interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, options, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900">
            {label}:
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

const SelectFieldLeader = ({ label, name, value, options, onChange }: {
    label: string;
    name: string;
    value: string;
    options: LeaderOption[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {options.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
);


interface LeaderOption {
    id: string;
    name: string;
}

const leaderOptions: LeaderOption[] = [
    { id: "137", name: "ANDRES GUZMAN" },
    { id: "138", name: "CÉSAR  MEDINA" },
    { id: "139", name: "DANIEL DURAN " },
    { id: "140", name: "DIEGO ROJAS" },
    { id: "141", name: "GIOVANNI SANTAMARIA" },
    { id: "142", name: "GUSTAVO MIRELES" },
    { id: "143", name: "JAHEMS ORDOÑEZ" },
    { id: "144", name: "JOHN RICARDO  CANTILLO MONSALVE " },
    { id: "145", name: "JONATHAN  HERNÁNDEZ" },
    { id: "146", name: "JOUSEPH RODRIGUEZ " },
    { id: "147", name: "MANUEL RENTERIA" },
    { id: "148", name: "MAURICIO PATINO" },
    { id: "149", name: "SAMIR VERA " },
    { id: "150", name: "ANA MARTINEZ " },
    { id: "151", name: "ANDREA PUENTES" },
    { id: "152", name: "ESNETH ORJUELA MURILLO" },
    { id: "153", name: "JANETH VIVIANA  GONGORA AHUMADA" },
    { id: "154", name: "JUDY BEATRIZ  RODRÍGUEZ YAYA " },
    { id: "155", name: "MAIRETH  MOLINA " },
    { id: "156", name: "MARIA  BONILLA" },
    { id: "157", name: "MARIA ISABEL NIETO" },
    { id: "158", name: "MARIANA  MILA " },
    { id: "159", name: "MONICA  PINZON " },
    { id: "160", name: "SANDRA SANCHEZ " },
    { id: "161", name: "TATIANA ZEA" },
    { id: "162", name: "VIVIANA SANCHEZ CARBONELL" },
    { id: "163", name: "VIVIANA CAROLINA  GUZMÁN " },
];


interface LocalityOption {
    id: string;
    name: string;
}

const localityOptions: LocalityOption[] = [
    { id: "1", name: "Usaquén" },
    { id: "2", name: "Chapinero" },
    { id: "3", name: "Santa Fe" },
    { id: "4", name: "San Cristóbal" },
    { id: "5", name: "Usme" },
    { id: "6", name: "Tunjuelito" },
    { id: "7", name: "Bosa" },
    { id: "8", name: "Kennedy" },
    { id: "9", name: "Fontibón" },
    { id: "10", name: "Engativá" },
    { id: "11", name: "Suba" },
    { id: "12", name: "Barrios Unidos" },
    { id: "13", name: "Teusaquillo" },
    { id: "14", name: "Los Mártires" },
    { id: "15", name: "Antonio Nariño" },
    { id: "16", name: "Puente Aranda" },
    { id: "17", name: "Candelaria" },
    { id: "18", name: "Rafael Uribe Uribe" },
    { id: "19", name: "Ciudad Bolívar" },
    { id: "20", name: "Sumapaz" },
];

const LocalitySelect: React.FC<{
    label: string;
    name: string;
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, name, selectedValue, onChange }) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}:
        </label>
        <select
            id={name}
            name={name}
            value={selectedValue}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">Seleccione una localidad</option>
            {localityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
);
interface VisionStatusSelectProps {
    label: string;
    name: string;
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const VisionStatusSelect: React.FC<VisionStatusSelectProps> = ({
    label,
    name,
    selectedValue,
    onChange,
}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-900">{label}:</label>
            <select
                id={name}
                name={name}
                value={selectedValue}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="">Seleccione un estado</option>
                <option value="1">Ganar</option>
                <option value="2">Consolidar</option>
                <option value="3">Discipular</option>
                <option value="4">Enviar</option>
            </select>
        </div>
    );
};


export default Home;
