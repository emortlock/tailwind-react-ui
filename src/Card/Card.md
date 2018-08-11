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
<Card border shadow>
  <img
    className="block"
    src="https://placekitten.com/1280/960"
    alt="Example image"
  />
  <CardBody>Hello World</CardBody>
  <CardFooter>
    <button className="px-4 py-2 bg-blue text-white border border-transparent">
      Read
    </button>
    <button className="px-4 py-2 border border-blue text-blue">Bookmark</button>
  </CardFooter>
</Card>
```
