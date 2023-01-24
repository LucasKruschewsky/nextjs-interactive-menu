import {
  InputSwitch as PrimeSwitch,
  InputSwitchChangeParams,
} from "primereact/inputswitch";
import { FC, useEffect, useState } from "react";
import { SelectButtonContainer } from "./SelectButton.styled";

interface Props {
  checked: boolean;
  onTrue?: () => void;
  onFalse?: () => void;
  onChange?: () => void;
}

export const SelectButton: FC<Props> = ({
  checked,
  onFalse,
  onTrue,
  onChange,
}) => {
  const [value, setValue] = useState<boolean>(checked);
  const [touched, setTouched] = useState<boolean>(false);

  useEffect(() => {
    // Triggers this condition after touched and toggled to true
    if (touched && !!onTrue && value) {
      onTrue();
    }

    // Triggers this condition after touched and toggled to false
    if (touched && !!onFalse && !value) {
      onFalse();
    }
  }, [value, touched, onTrue, onFalse]);

  const handleToggleChange = (e: InputSwitchChangeParams) => {
    setValue(e.value);
    setTouched(true);
    if (onChange) onChange();
  };

  return (
    <SelectButtonContainer>
      <PrimeSwitch
        className="prime-input-switch"
        checked={value}
        onChange={handleToggleChange}
      />
    </SelectButtonContainer>
  );
};
