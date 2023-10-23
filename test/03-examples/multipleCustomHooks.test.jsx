import { render,screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";

describe("Pruebas de <MultipleCustomHook />", () => {
  test("debe mostrar componente por defecto", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));
    const nextButton = screen.getByRole('button',{ name: 'Add quote'});
    expect( nextButton.disabled ).toBeTruthy();
    screen.debug();

  });
});