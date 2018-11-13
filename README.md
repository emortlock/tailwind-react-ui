# Tailwind React UI

[![CircleCI](https://circleci.com/gh/emortlock/tailwind-react-ui.svg?style=svg)](https://circleci.com/gh/emortlock/tailwind-react-ui) [![Greenkeeper badge](https://badges.greenkeeper.io/emortlock/tailwind-react-ui.svg)](https://greenkeeper.io/)

---

**NB:** As the 0.#.# version number suggests this is still very much work in progress, so semantic versioning will not be followed until a v1 release is solidified. Expect breaking changes to occur on minor version jumps.

---

Tailwind React UI provides ready built components that make use of [Tailwind CSS](https://tailwindcss.com/) utility framework.

If you're unfamiliar with the concepts behind Tailwind you can get an overview at https://tailwindcss.com/docs/what-is-tailwind:

> Creating a framework for building custom UIs means you can't provide abstractions at the usual level of buttons, forms, cards, navbars, etc.
> Instead, Tailwind provides highly composable, low-level utility classes that make it easy to build complex user interfaces.

Tailwind React UI leverages these utility classes to provide base level components that are common across various projects, whilst still offering the ability to customise the output to match your project's style.

## Features

### No Built in Styles

Tailwind React UI's components have no inline/encapsulated styles (barring some use for CSS transitions), so there's no specificity issues, no new CSS in JS tool chain to apply. The library simply uses classes made available by [Tailwind CSS](https://tailwindcss.com/) that your whole app will make use of with hooks available to specify which classes are applied.

### Utility Class Props

Introduces a [props API](https://emortlock.github.io/tailwind-react-ui/#usage) for Tailwind's uitlity classes that allows for extensive customisation & quick prototyping

- Bring this functionality to your own components through the `withTailind` higher order component or by using the component primitives to have that handled down wind

### Configurable Theme

Has a [configurable theme](https://emortlock.github.io/tailwind-react-ui/#theming) to apply a design system approach for the base styling of components

- Uses [React context](https://reactjs.org/docs/context.html) in order to allow for customising which color / space / etc classes get applied by default

- Can still leverage the utility props in all components to override the default styling in whatever way you wish with sensible defaults applied in relevent components, e.g. `<FillButton bg="purple-dark" text="white" />` will also apply interactive styling to the resulting element `<button className="bg-purple text-white hover:bg-purple-darker focus:bg-purple-darker" />`

### Composable Components

Tailwind React UI's suite of components are highly composable allowing for a large degree of flexibility.

- Components are largely functional, but where applicable offer wrappers to control UI state for opening/closing/etc.

- Components have accessibility best practices built in; inputs will read out related help/error text, toggleable components correctly call out their open state, etc

### PurgeCSS Support

[PurgeCSS](https://github.com/FullHuman/purgecss) is a key tool when using TailwindCSS to strip out any of the unused utilities and to avoid any complications with this the library provides a whitelist of classes your theme will generate from components as well as a custom extractor that parses the utility class props API used by the components.

## Example

### Using Utility Components

```jsx
<Box maxW="md" m={{ x: 'auto' }}>
  <Box border shadow bg="white">
    <Box p={4}>
      <Text is="h1" text={['blue', 'xxl']} m={{ b: 4 }}>
        Hello World
      </Text>
    </Box>
    <Flex items="end" wrap reverse>
      <Touchable
        p={{ x: 4, y: 2 }}
        border={[true, 'transparent']}
        bg="blue"
        bg-hocus="blue-dark"
        text="white"
        w="full"
        w-sm="1/5"
      >
        Foo
      </Touchable>
      <Touchable
        p={{ x: 4, y: 2 }}
        border={[true, 'blue']}
        text="blue"
        text-hocus="white"
        bg-hocus="blue"
        w="full"
        w-sm="1/5"
      >
        Bar
      </Touchable>
    </Flex>
  </Box>
</Box>
```

### Using UI Components

```jsx
<Container maxW="md">
  <Card border shadow>
    <CardBody>
      <Title size={6} text="blue">
        Hello World
      </Title>
    </CardBody>
    <CardFooter wrap>
      <FillButton brand="primary" w="full" w-sm="1/5">
        Foo
      </FillButton>
      <OutlineButton brand="primary" w="full" w-sm="1/5">
        Bar
      </OutlineButton>
    </CardFooter>
  </Card>
</Container>
```

## Useful Links

- [GitHub](https://github.com/emortlock/tailwind-react-ui)

- [Documentation](https://emortlock.github.io/tailwind-react-ui/#documentation)

- [Component demos](https://emortlock.github.io/tailwind-react-ui/#utility-components)
