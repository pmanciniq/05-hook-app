import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe("pruebas en useForm", () => {
  const initialForm = {
    name: "paolo",
    email: "paolo@paolo.com",
  };
  test("debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("debe cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange } = result.current;
    expect(formState).toEqual(initialForm);
    act(() => {
      onInputChange({ target: { name: "javier", ...initialForm } });
    });
    expect(formState).toEqual({ name: "javier", ...initialForm });
  });
});
