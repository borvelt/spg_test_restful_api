import { FiltersStateShape } from "../../containers/Filters/types";

export type FiltersProps = {
  currentFilters: FiltersStateShape;
  onChangeFilter: (newFilter: FiltersStateShape) => void;
};
