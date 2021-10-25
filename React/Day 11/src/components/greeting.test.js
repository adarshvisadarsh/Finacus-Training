import { render, screen } from "@testing-library/react";
import Greeting from "./greeting";

describe('Greeting component',  () => {
    test("renders Hello world as a test", () => {
        render(<Greeting />);
        const helloworldElement = screen.getByText("Hello world", { exact: false });
        expect(helloworldElement).toBeInTheDocument();
      });
});


