import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from ".";

describe("Button", () => {
  const handlerClick = jest.fn();
  it("renders button", () => {
    render(<Button>Button teste</Button>);

    const button = screen.getByText("Button teste");

    expect(button).toBeInTheDocument();
  });

  it("renders button kind full", () => {
    render(<Button full>Button teste</Button>);

    const button = screen.getByText("Button teste");

    expect(button).toBeInTheDocument();
  });

  it("renders button kind outlined", () => {
    render(<Button outlined>Button teste</Button>);

    const button = screen.getByText("Button teste");

    expect(button).toBeInTheDocument();
  });

  it("renders button kind small", () => {
    render(<Button small>Button teste</Button>);

    const button = screen.getByText("Button teste");

    expect(button).toBeInTheDocument();
  });

  it("test click in button", () => {
    render(<Button onClick={handlerClick}>Button teste</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handlerClick.mock.calls.length).toBe(1);
  });
});
