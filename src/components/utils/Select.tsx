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
    const [option, setOption] = useState("pt");

    return (
        <SelectContext.Provider value={{ option, setOption }}>
            {children}
        </SelectContext.Provider>
    );
};

const Select = ({ id, options }: SelectProps) => {
    const { option, setOption } = useSelectContext();

    return (
        <select className="select-button" name={id} id={id}>
            {options.map(({ value, title }) => (
                <option value={value} selected={value === option} onClick={setOption.bind(null, value)}>
                    {title}
                </option>
            ))}
        </select>
    );
};

export default Select;