import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";
import Test from "./Test";

const ErrorBoundaryComponent = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Test />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryComponent;
