import React, { useState } from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Helper function to render a basic sheet
const renderSheet = (side?: "top" | "right" | "bottom" | "left") => {
  return render(
    <Sheet>
      <SheetTrigger data-testid="sheet-trigger">Open</SheetTrigger>
      <SheetContent side={side} data-testid="sheet-content">
        <SheetHeader>
          <SheetTitle id="sheet-title">Test Title</SheetTitle>
          <SheetDescription id="sheet-description">
            Test Description
          </SheetDescription>
        </SheetHeader>
        <div>Test Content</div>
        <SheetFooter data-testid="sheet-footer">
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

describe("Sheet Component", () => {
  // Suppress console errors for all tests except the one that tests for errors
  let originalConsoleError: typeof console.error;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("renders with default props", () => {
    renderSheet();
    expect(screen.getByTestId("sheet-trigger")).toBeInTheDocument();
  });

  it("opens when trigger is clicked", async () => {
    renderSheet();
    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    const content = screen.getByTestId("sheet-content");
    expect(content).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    renderSheet();
    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    const closeButton = screen.getByTestId("sheet-close-button");
    await userEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByTestId("sheet-content")).not.toBeInTheDocument();
    });
  });

  it.each(["top", "right", "bottom", "left"] as const)(
    "renders from %s side",
    async (side) => {
      renderSheet(side);
      const trigger = screen.getByTestId("sheet-trigger");
      await userEvent.click(trigger);

      const content = screen.getByTestId("sheet-content");
      expect(content).toHaveAttribute("data-side", side);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    }
  );

  it("renders with controlled state", async () => {
    const ControlledSheet = () => {
      const [open, setOpen] = useState(false);

      return (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger data-testid="sheet-trigger">Open</SheetTrigger>
          <SheetContent data-testid="sheet-content">
            <SheetHeader>
              <SheetTitle id="sheet-title">Controlled Sheet</SheetTitle>
              <SheetDescription id="sheet-description">
                Controlled Description
              </SheetDescription>
            </SheetHeader>
            <div>Controlled Content</div>
          </SheetContent>
        </Sheet>
      );
    };

    render(<ControlledSheet />);
    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Controlled Content")).toBeInTheDocument();
      expect(screen.getByText("Controlled Sheet")).toBeInTheDocument();
      expect(screen.getByText("Controlled Description")).toBeInTheDocument();
    });
  });

  it("shows accessibility warning when missing title", async () => {
    // Temporarily restore console.error for this test
    console.error = originalConsoleError;

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <Sheet>
        <SheetTrigger data-testid="sheet-trigger">Open</SheetTrigger>
        <SheetContent data-testid="sheet-content">
          <div>Content without title</div>
        </SheetContent>
      </Sheet>
    );

    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("DialogContent` requires a `DialogTitle")
    );

    consoleSpy.mockRestore();

    // Re-suppress console errors after this test
    console.error = jest.fn();
  });

  it("renders footer with correct classes", async () => {
    renderSheet();
    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    const footer = screen.getByTestId("sheet-footer");
    expect(footer).toHaveClass(
      "flex",
      "flex-col-reverse",
      "sm:flex-row",
      "sm:justify-end",
      "sm:space-x-2"
    );
  });

  it("has correct accessibility attributes", async () => {
    renderSheet();
    const trigger = screen.getByTestId("sheet-trigger");
    await userEvent.click(trigger);

    const content = screen.getByTestId("sheet-content");
    expect(content).toHaveAttribute("aria-labelledby");
    expect(content).toHaveAttribute("aria-describedby");

    const title = screen.getByText("Test Title");
    expect(title).toHaveAttribute("id");

    const description = screen.getByText("Test Description");
    expect(description).toHaveAttribute("id");
  });
});
