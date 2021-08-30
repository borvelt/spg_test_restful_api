import EnergyConsumptionContainer from "./containers/EnergyConsumption";
import FiltersContainer from "./containers/Filters";
import EnergyConsumptionContext from "./containers/EnergyConsumption/context";
import FiltersContext from "./containers/Filters/context";
import DefaultLayout from "./layouts/default";

function App() {
  return (
    <DefaultLayout>
      <FiltersContext>
        <EnergyConsumptionContext>
          <EnergyConsumptionContainer />
          <FiltersContainer />
        </EnergyConsumptionContext>
      </FiltersContext>
    </DefaultLayout>
  );
}

export default App;
