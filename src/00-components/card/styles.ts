import { cva } from "class-variance-authority";

const cardStyles = cva("card", {
  variants: {
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ size: "medium", class: "uppercase" }],
  defaultVariants: {
    size: "medium",
  },
});

export default cardStyles;
