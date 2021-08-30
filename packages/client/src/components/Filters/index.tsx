import { FC } from "react";
import classNames from "classnames";
import DatePicker from "../DatePicker";
import Container from "../Container";
import { FiltersProps } from "./types";
import CheckBox from "../CheckBox";
import { ConsumptionTypes } from "../../containers/EnergyConsumption/types";
import s from "./styles.module.scss";

const Filters: FC<FiltersProps> = ({ onChangeFilter, currentFilters }) => {
  return (
    <Container>
      <Container
        center
        className={classNames(s.filtersContainer, s.datePickerFilters)}
      >
        <DatePicker
          id="datepickerFrom"
          title="From"
          value={`${currentFilters.from.year}-${currentFilters.from.month
            .toString()
            .padStart(2, "0")}-01`}
          min="2012-01-01"
          max="2022-01-01"
          onChange={(e) => {
            const from = new Date(e.target.valueAsDate || 0);
            onChangeFilter({
              ...currentFilters,
              from: {
                month: from.getUTCMonth() + 1,
                year: from.getFullYear(),
              },
            });
          }}
        />
        <DatePicker
          id="datepickerTo"
          title="To"
          value={`${currentFilters.to.year}-${currentFilters.to.month
            .toString()
            .padStart(2, "0")}-01`}
          min="2012-01-01"
          max="2022-01-01"
          onChange={(e) => {
            const to = new Date(e.target.valueAsDate || 0);
            onChangeFilter({
              ...currentFilters,
              to: {
                month: to.getUTCMonth() + 1,
                year: to.getUTCFullYear(),
              },
            });
          }}
        />
      </Container>
      <Container className={classNames(s.filtersContainer, s.checkBoxFilters)}>
        <CheckBox
          id={ConsumptionTypes.ELECTRICITY}
          title={ConsumptionTypes.ELECTRICITY}
          checked={currentFilters.types[ConsumptionTypes.ELECTRICITY]}
          onChange={(e) => {
            onChangeFilter({
              ...currentFilters,
              types: {
                ...currentFilters.types,
                [ConsumptionTypes.ELECTRICITY]:
                  !currentFilters.types[ConsumptionTypes.ELECTRICITY],
              },
            });
          }}
        />
        <CheckBox
          id={ConsumptionTypes.GAS}
          title={ConsumptionTypes.GAS}
          checked={currentFilters.types[ConsumptionTypes.GAS]}
          onChange={(e) => {
            onChangeFilter({
              ...currentFilters,
              types: {
                ...currentFilters.types,
                [ConsumptionTypes.GAS]:
                  !currentFilters.types[ConsumptionTypes.GAS],
              },
            });
          }}
        />
        <CheckBox
          id={ConsumptionTypes.WATER}
          title={ConsumptionTypes.WATER}
          checked={currentFilters.types[ConsumptionTypes.WATER]}
          onChange={(e) => {
            onChangeFilter({
              ...currentFilters,
              types: {
                ...currentFilters.types,
                [ConsumptionTypes.WATER]:
                  !currentFilters.types[ConsumptionTypes.WATER],
              },
            });
          }}
        />
      </Container>
    </Container>
  );
};

export default Filters;
