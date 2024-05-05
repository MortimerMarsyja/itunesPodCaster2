import { render, screen, cleanup } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";
import Card from "./Card";

// kitten place holder is currently down
// and I have a tradition of image testing being done with cats
const catTestImg =
  "https://www.worldatlas.com/r/w1200-q80/upload/c7/91/96/shutterstock-109340948.jpg";

const TestCard = () => {
  return (
    <Card
      artist="test-artist"
      cover={catTestImg}
      size="medium"
      title="test-title"
    />
  );
};

describe("card", () => {
  afterEach(cleanup);
  test("should show artist", () => {
    render(<TestCard />);
    const artistElement = screen.getByText("by test-artist");
    expect(document.body.contains(artistElement)).toBe(true);
  });

  test("should display test title", () => {
    render(<TestCard />);
    const titleElement = screen.getByText("test-title");
    expect(document.body.contains(titleElement)).toBe(true);
  });

  test("should render image with correct src", async () => {
    render(<TestCard />);
    const img = document.querySelector("img");
    expect(img).toBeDefined();
  });
});
