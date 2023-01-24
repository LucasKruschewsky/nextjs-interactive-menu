import {
  InputSwitch as PrimeSwitch,
  InputSwitchChangeParams,
} from "primereact/inputswitch";
import { FC, useEffect, useState } from "react";

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
    // onChange callback will override onTrue and onFalse
    if (!!onChange && touched) {
      onChange();
      return;
    }

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
  };

  return <PrimeSwitch checked={value} onChange={handleToggleChange} />;
};
