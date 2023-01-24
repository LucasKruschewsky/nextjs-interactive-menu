import {
  InputSwitch as PrimeSwitch,
  InputSwitchChangeParams,
} from "primereact/inputswitch";
import { FC, useEffect, useState } from "react";

interface Props {
  checked?: boolean;
  onTrue?: () => void;
  onFalse?: () => void;
  onChange?: () => void;
  className?: string;
}

export const SelectButton: FC<Props> = ({
  checked,
  onFalse,
  onTrue,
  onChange,
  className,
}) => {
  const [value, setValue] = useState<boolean>();
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setValue(checked)
  }, [checked])

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
    <PrimeSwitch
      className={`prime-input-switch ${className}`}
      checked={value}
      onChange={handleToggleChange}
    />
  );
};
