// File: __tests__/components/nav.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Nav } from "@/components/nav";

describe("Nav Component", () => {
  it("renders the navigation bar with logo", () => {
    render(<Nav />);
    expect(screen.getByText("ድረ-ገጽ")).toBeInTheDocument();
  });

  it("renders navigation links on desktop", () => {
    render(<Nav />);
    expect(screen.getByRole("button", { name: "መነሻ" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ይዘቶች" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ስለ እኛ" })).toBeInTheDocument();
  });

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Nav />);
    // Find the button by its data-testid
    const menuButton = screen.getByTestId("mobile-menu-button");
    fireEvent.click(menuButton);
    expect(screen.getByText("ድረ-ገጽ አስሰር")).toBeInTheDocument();
  });

  it("scrolls to section when navigation link is clicked", () => {
    // Mock scrollIntoView
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    // Mock querySelector to return a mock element
    document.querySelector = jest.fn().mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });

    render(<Nav />);
    const homeLink = screen.getByRole("button", { name: "መነሻ" });
    fireEvent.click(homeLink);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });
});
