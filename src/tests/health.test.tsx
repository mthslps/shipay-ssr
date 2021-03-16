import { render, screen } from "@testing-library/react";
import Health from "../pages/health";

describe("Health Check test", () => {
  it("renders successful health check", () => {
    render(
      <Health
        errorCode={false}
        healthCheck={{
          message: "all services are up and running",
          status: 200,
        }}
      />
    );
    const healthCheckSuccessfulResponse = screen.getByText(
      "all services are up and running | 200"
    );
    expect(healthCheckSuccessfulResponse).toBeInTheDocument();
  });

  it("renders unsuccessful health check", () => {
    render(
      <Health
        errorCode={504}
        healthCheck={{
          message: "",
          status: null,
        }}
      />
    );
    const healthCheckUnsuccessfulResponse = screen.getByText(
      "An unexpected error has occurred."
    );
    expect(healthCheckUnsuccessfulResponse).toBeInTheDocument();
  });
});
