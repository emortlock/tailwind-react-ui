Follows the component behaviour described on the Tailwind CSS [grid component page](https://tailwindcss.com/docs/examples/grids).

Example:

```jsx
<Row>
  <Col>
    <div className="bg-grey p-4 text-center">1/1</div>
  </Col>
  <Col size="1/2">
    <div className="bg-grey-light p-4 text-center">1/1</div>
  </Col>
  <Col size="1/2">
    <div className="bg-grey p-4 text-center">1/2</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey-light p-4 text-center">1/3</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey p-4 text-center">1/3</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey-light p-4 text-center">1/3</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey-light p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey-light p-4 text-center">1/4</div>
  </Col>
</Row>
```

Gutters:

```jsx
<Row gutter>
  <Col>
    <div className="bg-grey p-4 text-center">1/1</div>
  </Col>
  <Col size="1/2">
    <div className="bg-grey-light p-4 text-center">1/1</div>
  </Col>
  <Col size="1/2">
    <div className="bg-grey p-4 text-center">1/2</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey-light p-4 text-center">1/3</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey p-4 text-center">1/3</div>
  </Col>
  <Col size="1/3">
    <div className="bg-grey-light p-4 text-center">1/3</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey-light p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey p-4 text-center">1/4</div>
  </Col>
  <Col size="1/4">
    <div className="bg-grey-light p-4 text-center">1/4</div>
  </Col>
</Row>
```

Responsive column widths:

```jsx
<Row gutter>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey p-4 h-12" />
  </Col>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey-light p-4 h-12" />
  </Col>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey p-4 h-12" />
  </Col>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey-light p-4 h-12" />
  </Col>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey p-4 h-12" />
  </Col>
  <Col size={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <div className="bg-grey-light p-4 h-12" />
  </Col>
</Row>
```

Auto column widths:

```jsx
<Row nowrap>
  <Col size="auto">
    <div className="bg-grey p-4 h-12" />
  </Col>
  <Col size="auto">
    <div className="bg-grey-light p-4 h-12" />
  </Col>
  <Col size="auto">
    <div className="bg-grey p-4 h-12" />
  </Col>
</Row>
```
