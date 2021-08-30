import { FC } from "react";
import { CheckBoxProps } from "./types";
import s from "./styles.module.scss";

const CheckBox: FC<CheckBoxProps> = ({ className, id, title, ...props }) => {
  return (
    <div>
      <label className={s.label} htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        type="checkbox"
        title={title}
        className={className}
        {...props}
      />
    </div>
  );
};

export default CheckBox;
