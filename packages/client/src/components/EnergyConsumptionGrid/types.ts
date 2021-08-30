import { ComponentProps } from "react";
import { EnergyConsumptionStateShape } from "../../containers/EnergyConsumption/types";

export type EnergyConsumptionGridProps = ComponentProps<"div"> & {
  data: EnergyConsumptionStateShape["data"];
};
