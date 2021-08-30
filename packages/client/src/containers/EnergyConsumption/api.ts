import { FiltersStateShape } from "../Filters/types";
import { api, endpoints } from "./constants";
import {
  ConsumptionTypes,
  EnergyConsumptionResponseShape,
  EnergyConsumptionStateShape,
} from "./types";

// sends request to the specific endpoint.
export const sendFetchEnergyConsumptionRequest = async (
  filters: FiltersStateShape
): Promise<EnergyConsumptionStateShape["data"]> => {
  const formattedFilters = {
    where: {
      and: [
        {
          year: { between: [filters.from.year, filters.to.year] },
          month: { between: [filters.from.month, filters.to.month] },
        },
      ],
    },
  };
  const promises: Promise<EnergyConsumptionResponseShape>[] = [];
  Object.entries(filters.types).forEach(
    ([energy, status]: [string, boolean], idx) => {
      if (!status) {
        return;
      }
      promises[idx] = fetch(
        new Request(
          `${api.BASE_URL}${
            endpoints[energy as ConsumptionTypes]
          }?filter=${encodeURIComponent(JSON.stringify(formattedFilters))}`
        )
      ).then((x) => x.json());
    }
  );
  const fulfiled = await Promise.all(promises);
  const response: EnergyConsumptionStateShape["data"] = {
    electricity: [],
    gas: [],
    water: [],
  };
  fulfiled.forEach((x, idx) => {
    response[Object.keys(filters.types)[idx] as ConsumptionTypes] =
      x?.data || [];
  });
  return response;
};
