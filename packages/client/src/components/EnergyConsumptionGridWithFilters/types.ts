import { EnergyConsumptionStateShape } from "../../containers/EnergyConsumption/types";
import { FiltersProps } from "../Filters/types";

export type EnergyConsumptionGridWithFiltersProps = FiltersProps & {
  energyConsumption: EnergyConsumptionStateShape["data"];
};
