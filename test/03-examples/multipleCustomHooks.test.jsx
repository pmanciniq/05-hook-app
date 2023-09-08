import {render} from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples";

describe("Pruebas de <MultipleCustomHook />", () => {
  test("debe mostrar componente por defecto", () => {
    render( <MultipleCustomHooks /> );
    screen.debug();
    expect(screen.getByText("Loading..."));
    
  });
});
