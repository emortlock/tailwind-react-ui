# Changelog

## Unreleased

## v0.8.0

### Added support for `prefix` as part of theme ([#60](https://github.com/emortlock/tailwind-react-ui/pull/60))

- Used component primitives for all UI elements
- Made all tailwind utility class options available through prop syntax
- Attached theme context to `Base` so it can pass `prefix` value to `getTailwindClassNames`
- Change `tailwindPropToClassName` to insert `prefix` at relevent point
