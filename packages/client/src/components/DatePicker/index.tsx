import { FC } from "react";
import { DatePickerProps } from "./types";
import s from "./styles.module.scss";

const DatePicker: FC<DatePickerProps> = ({ className, id, title, ...rest }) => {
  return (
    <div className={s.datepickerContainer}>
      <label htmlFor={id}>{title}</label>
      <input id={id} type="date" {...rest} />
    </div>
  );
};
export default DatePicker;
