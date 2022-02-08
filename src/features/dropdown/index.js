import { Select } from "./styles";

export const Dropdown = ({ value, onChange, options }) => {
  return (
    <Select value={value} onChange={onChange}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};
