Simple card:

```jsx
<Card>
  <CardBody>
    <p>Hello World</p>
  </CardBody>
</Card>
```

Full example:

```jsx
<Card border shadow-hover>
  <img
    className="block"
    src="https://placekitten.com/1280/960"
    alt="Example image"
  />
  <CardBody>Hello World</CardBody>
  <CardFooter>
    <FillButton brand="primary">Read</FillButton>
    <OutlineButton brand="primary">Bookmark</OutlineButton>
  </CardFooter>
</Card>
```
