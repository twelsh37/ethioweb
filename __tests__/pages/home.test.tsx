// File: __tests__/pages/home.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders all sections", () => {
    render(<Home />);

    // Check for section headings
    expect(screen.getByText("እንኳን ወደ ድረ-ገጻችን በደህና መጡ")).toBeInTheDocument();
    expect(screen.getByText("ዋና ይዘቶች")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ስለ እኛ" })).toBeInTheDocument();
  });

  it("renders content cards", () => {
    render(<Home />);

    // Check for content card headings
    expect(screen.getByText("መረጃ እና ዜናዎች")).toBeInTheDocument();
    expect(screen.getByText("አገልግሎቶች")).toBeInTheDocument();
    expect(screen.getByText("እድገት እና ዕድሎች")).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(<Home />);

    // Check for buttons with specific text
    expect(screen.getByRole("button", { name: "ይበዛ ይዩ" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ያግኙን" })).toBeInTheDocument();
  });

  it("renders section content", () => {
    render(<Home />);

    // Check for section content
    expect(screen.getByText(/ይህ ድረ-ገጽ በአማርኛ ቋንቋ የተፈጠረ/)).toBeInTheDocument();
    expect(screen.getByText(/እኛ በአማርኛ ቋንቋ የተለያዩ መረጃዎችን/)).toBeInTheDocument();
  });
});
