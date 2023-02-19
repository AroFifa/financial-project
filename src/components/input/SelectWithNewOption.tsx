import { IonInput, IonItem } from "@ionic/react";
import { useState } from "react";

interface Props {
  options: string[];
  onOptionSelected: (option: string) => void;
}

interface SelectWithNewOptionProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }

const SelectWithNewOption: React.FC<Props> = ({ options, onOptionSelected }) => {
  const [newOption, setNewOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionSelected(event.target.value);
  };

  const handleNewOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleNewOptionSelected = () => {
    if (newOption.trim() !== "") {
      onOptionSelected(newOption.trim());
      setNewOption("");
    }
  };

  return (
    <>
      <select onChange={handleSelectChange} value="">
        <option value="" disabled>
          Select an option...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        value={newOption}
        onChange={handleNewOptionChange}
        list="options"
      />
      <datalist id="options">
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
      <button onClick={handleNewOptionSelected}>Add</button>




    </>
  );
};

export default SelectWithNewOption;
