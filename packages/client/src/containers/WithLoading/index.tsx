import { FC } from "react";
import { LoadingProps } from "../EnergyConsumption/types";
import s from "./styles.module.scss";

// this wrapper function indicates loading for input component.
const WithLoading = <T extends {}>(
  WrappedComponent: FC<Omit<T, keyof LoadingProps>>
) => {
  const InnerComponent = ({ loading, ...props }: T & LoadingProps) => {
    return (
      <>
        {loading && (
          <div className={s.loading}>
            <p className={s.loadingText}>Please Wait...</p>
          </div>
        )}
        <WrappedComponent {...props} />
      </>
    );
  };
  return InnerComponent;
};
export default WithLoading;
