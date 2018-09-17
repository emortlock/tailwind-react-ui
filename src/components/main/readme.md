Simple wrapper around the standard `<main />` element which adds an ID for use with an access friendly skip link.

### Example

Tab onto the example below to see this behaviour in action.

```jsx
<SkipLink href="#main-example" />
<Card h={64} bg="grey-dark" text="white" flex items="center" justify="center" rounded="none">
  Some interceding content, e.g. a header / navigation
</Card>
<Main id="main-example" p={4} border rounded="b">
  <Text>This is the main body of my app... disappointing isn't it.</Text>
</Main>
```

Note that the ID's were set for this example to avoid conflict with the auto-generated styleguide. With no values specificied the components will default to using `main`.
