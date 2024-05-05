# Inditex entry Exam:
This is my own approach on a small size bundle for making a fast and performing platform.

Use Yarn to install the dependencies before starting the project

```bash
# Install dependencies
yarn

# Start the dev server
yarn dev
```

### Main technologies:
- Preact
- Vite
- Tailwind
- Tanstack Router

## Why Preact? 

For three reasons, 
- its a lighter library than React working just as fine
- has better performance
- I haven't ever used it
(since I am making an exam, I might as well learn something new while I am at it, 
the differences between React and Preact are not major so am expecting only upsides)

### While at it...
I'd like to build a small global state utility using signals for Preact.

## Testing

For testing I will be using react testing library and maybe TDD (depending on the time).

```bash
# coverage
yarn coverage

# tests
yarn test
```

Will use Happy Dom because emulating the dom is better for performance, and handier for testing events.

that said I will use React testing library along with it and vitest.

listed in short:
- Vitest
- React testing library
- happy-dom (for environment)

finally playwright possibly for E2E testing.

## Tanstack Router, why?
While most of the people are using React Router, Tanstack 
offers full typesafety validation
