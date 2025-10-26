import { createContext, useContext, useState } from "react";
import "../styles/Select.css";

interface ProviderProps {
    children: React.ReactNode
};

interface SelectProps {
    id: string,
    options: Array<{ value: string, title: string }>
};

const SelectContext = createContext({
    option: "pt",
    setOption: (_opt: string) => {}
});

export const useSelectContext = () => useContext(SelectContext);

export const SelectProvider = ({ children }: ProviderProps) => {
	const language = navigator.language.split("-")[0] ?? "pt";
    const [option, setOption] = useState(language);

    return (
        <SelectContext.Provider value={{ option, setOption }}>
            {children}
        </SelectContext.Provider>
    );
};

const Select = ({ id, options }: SelectProps) => {
    const { option, setOption } = useSelectContext();

    return (
        <select className="select-button" name={id} id={id} defaultValue={option}>
            {options.map(({ value, title }, index) => (
                <option key={index} value={value} onClick={setOption.bind(null, value)}>
                    {title}
                </option>
            ))}
        </select>
    );
};

export default Select;