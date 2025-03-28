import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "bg-primary",
      "text-primary-foreground",
      "h-9",
      "px-4"
    );
  });

  it.each(["default", "destructive", "outline", "secondary", "ghost", "link"])(
    "renders with %s variant",
    (variant) => {
      render(<Button variant={variant as any}>Click me</Button>);
      const button = screen.getByRole("button");

      const variantClasses = {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "border bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4",
      };

      expect(button.className).toContain(
        variantClasses[variant as keyof typeof variantClasses]
      );
    }
  );

  it.each(["default", "sm", "lg", "icon"])("renders with %s size", (size) => {
    render(<Button size={size as any}>Click me</Button>);
    const button = screen.getByRole("button");

    const sizeClasses = {
      default: "h-9 px-4",
      sm: "h-8 px-3",
      lg: "h-10 px-6",
      icon: "size-9",
    };

    expect(button.className).toContain(
      sizeClasses[size as keyof typeof sizeClasses]
    );
  });

  it("renders with custom className", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("inline-flex", "items-center", "justify-center");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:pointer-events-none",
      "disabled:opacity-50"
    );
  });

  it("renders with icon", () => {
    render(
      <Button>
        <svg data-testid="icon" />
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    const icon = screen.getByTestId("icon");

    expect(button).toHaveClass("gap-2");
    expect(icon).toHaveClass("size-4", "shrink-0");
  });

  it("handles focus and hover states", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass(
      "focus-visible:border-ring",
      "focus-visible:ring-ring/50",
      "focus-visible:ring-[3px]",
      "hover:bg-primary/90"
    );
  });

  it("handles invalid state", () => {
    render(<Button aria-invalid>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass(
      "aria-invalid:ring-destructive/20",
      "aria-invalid:border-destructive"
    );
  });
});
