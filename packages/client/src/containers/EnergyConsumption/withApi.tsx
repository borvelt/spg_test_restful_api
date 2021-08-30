import { FC, useEffect } from "react";
import { FiltersStateShape } from "../Filters/types";
import { sendFetchEnergyConsumptionRequest } from "./api";
import { WithApiProps } from "./types";

// a wrapper function which adds the api functionality to the component.
// this wrapper will call energyConsumption api.
const WithApi = <T extends {}>(
  WrappedComponent: FC<
    Omit<T, keyof WithApiProps> & { currentFilters: FiltersStateShape }
  >
) => {
  const InnerComponent = ({
    fetchEnergyConsumptionRequest,
    fetchEnergyConsumptionSuccess,
    fetchEnergyConsumptionFailed,
    currentFilters,
    ...props
  }: T & WithApiProps) => {
    useEffect(() => {
      fetchEnergyConsumptionRequest();
      sendFetchEnergyConsumptionRequest(currentFilters)
        .then(fetchEnergyConsumptionSuccess)
        .catch(fetchEnergyConsumptionFailed);
    }, [
      fetchEnergyConsumptionRequest,
      fetchEnergyConsumptionSuccess,
      fetchEnergyConsumptionFailed,
      currentFilters,
    ]);
    return <WrappedComponent {...props} currentFilters={currentFilters} />;
  };
  return InnerComponent;
};

export default WithApi;
