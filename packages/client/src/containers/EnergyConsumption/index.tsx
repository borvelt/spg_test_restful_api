import { FC } from "react";
import EnergyConsumptionGrid from "../../components/EnergyConsumptionGrid";
import { EnergyConsumptionGridProps } from "../../components/EnergyConsumptionGrid/types";
import WithLoading from "../WithLoading";
import { useEnergyConsumption } from "./context";
import { LoadingProps } from "./types";

const EnergyConsumptionContainerIndex: FC = () => {
  const { state } = useEnergyConsumption();
  const props = {
    data: state.data,
    loading: state.loading,
  };

  // composing small functions to create big functionality
  // withApi -> handles stuff about api call.
  // withLoading -> indicates loading text.
  return WithLoading<LoadingProps & EnergyConsumptionGridProps>(
    EnergyConsumptionGrid
  )(props);
};

export default EnergyConsumptionContainerIndex;
