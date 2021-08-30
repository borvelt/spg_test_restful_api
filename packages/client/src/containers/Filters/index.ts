import { FC, useCallback } from "react";
import Filters from "../../components/Filters";
import { FiltersProps } from "../../components/Filters/types";
import {
  fetchEnergyConsumptionFailed,
  fetchEnergyConsumptionRequest,
  fetchEnergyConsumptionSuccess,
} from "../EnergyConsumption/actions";
import { useEnergyConsumption } from "../EnergyConsumption/context";
import { useFilters } from "./context";
import { FiltersStateShape, WithApiProps } from "./types";
import WithApi from "./withApi";

const FiltersContainer: FC = () => {
  const { filters, setFilters } = useFilters();
  const { dispatch } = useEnergyConsumption();

  const props = {
    currentFilters: filters,
    onChangeFilter: useCallback(
      (filter: FiltersStateShape) => {
        setFilters(filter);
      },
      [setFilters]
    ),
    fetchEnergyConsumptionRequest: useCallback(
      () => dispatch(fetchEnergyConsumptionRequest()),
      [dispatch]
    ),
    fetchEnergyConsumptionSuccess: useCallback(
      (x) => dispatch(fetchEnergyConsumptionSuccess(x)),
      [dispatch]
    ),
    fetchEnergyConsumptionFailed: useCallback(
      (e) => dispatch(fetchEnergyConsumptionFailed(e)),
      [dispatch]
    ),
  };
  return WithApi<WithApiProps & FiltersProps>(Filters)(props);
};

export default FiltersContainer;
