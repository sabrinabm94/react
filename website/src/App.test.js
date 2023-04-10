import { render, screen } from "@testing-library/React";
import App from "./App";

describe("App", () => {
    //fit("Shoud render the component", () => {
    it("Shoud render the component", () => {
        render(
            <App />
        );

        expect(screen.getByTestId("app-component")).toBeInTheDocument();
    });
});
