import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonFloat } from ".";
import { ThemeProvider } from "styled-components";

describe("Button", () => {
  const theme = {
    colors: {
      primary: "#f7eceb",
      secundary: "#499fcd",
    },
  };
  const handlerClick = jest.fn();

  it("renders button", () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonFloat key="button-teste" onClick={handlerClick}>
          <p>Button teste</p>
        </ButtonFloat>
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
