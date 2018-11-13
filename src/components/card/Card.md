Standard card functionality made up of:

- `<Card />` &mdash; wrapping component with overflow hidden to allow for full size image headers
- `<CardBody />` &mdash; padded element for main content of the card
- `<CardFooter />` &mdash; right aligns, reverses order & squares corners of elements to have CTAs in priority tab order

### Simple Example

```jsx
<Card>
  <CardBody>
    <p>Hello World</p>
  </CardBody>
</Card>
```

### Full Example

```jsx
<Card border shadow maxW="sm">
  <Image
    src="https://placekitten.com/1280/960"
    alt="Example image"
    aspectRatio={1280 / 960}
  />
  <CardBody>Hello World</CardBody>
  <CardFooter>
    <FillButton brand="primary">Read</FillButton>
    <OutlineButton brand="primary">Bookmark</OutlineButton>
  </CardFooter>
</Card>
```
