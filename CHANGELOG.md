# Changelog

## Unreleased

---

## v0.8.1

### Added `surface` prop to `Card` ([#65](https://github.com/emortlock/tailwind-react-ui/pull/65))

- Can supply `brandColors` or `surfaceColors` from `theme` to apply background color and relevent text color

### Styleguide site improvements ([#66](https://github.com/emortlock/tailwind-react-ui/pull/66))

- Attached examples to component rather than top level module so they live alongside prop definitions
- Added 'transparent effect' background to preview windows so background colours provided are more clear

---

## v0.8.0

### Added support for `prefix` as part of theme ([#60](https://github.com/emortlock/tailwind-react-ui/pull/60))

- Used component primitives for all UI elements
- Made all tailwind utility class options available through prop syntax
- Attached theme context to `Base` so it can pass `prefix` value to `getTailwindClassNames`
- Change `tailwindPropToClassName` to insert `prefix` at relevent point
