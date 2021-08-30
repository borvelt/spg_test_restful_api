import { FC } from "react";
import Container from "../Container";
import EnergyConsumptionGrid from "../EnergyConsumptionGrid";
import { EnergyConsumptionGridWithFiltersProps } from "./types";
import Filters from "../Filters";
import s from "./styles.module.scss";

const EnergyConsumptionGridWithFilters: FC<EnergyConsumptionGridWithFiltersProps> =
  ({ energyConsumption, onChangeFilter, currentFilters }) => {
    return (
      <Container>
        <EnergyConsumptionGrid
          className={s.gridCenter}
          data={energyConsumption}
        />
        <Filters
          currentFilters={currentFilters}
          onChangeFilter={onChangeFilter}
        />
      </Container>
    );
  };

export default EnergyConsumptionGridWithFilters;
