```jsx
<Row>
  <Col bg="grey" text="center" p="4">
    1/1
  </Col>
  <Col w="1/2" bg="grey-light" text="center" p="4">
    1/2
  </Col>
  <Col w="1/2" bg="grey" text="center" p="4">
    1/2
  </Col>
  <Col w="1/3" bg="grey-light" text="center" p="4">
    1/3
  </Col>
  <Col w="1/3" bg="grey" text="center" p="4">
    1/3
  </Col>
  <Col w="1/3" bg="grey-light" text="center" p="4">
    1/3
  </Col>
  <Col w="1/4" bg="grey" text="center" p="4">
    1/4
  </Col>
  <Col w="1/4" bg="grey-light" text="center" p="4">
    1/4
  </Col>
  <Col w="1/4" bg="grey" text="center" p="4">
    1/4
  </Col>
  <Col w="1/4" bg="grey-light" text="center" p="4">
    1/4
  </Col>
</Row>
```

### Gutters

```jsx
<Row gutter>
  <Col>
    <Card bg="grey" text="center" p="4" rounded="none">
      1/1
    </Card>
  </Col>
  <Col w="1/2">
    <Card bg="grey-light" text="center" p="4" rounded="none">
      1/2
    </Card>
  </Col>
  <Col w="1/2">
    <Card bg="grey" text="center" p="4" rounded="none">
      1/2
    </Card>
  </Col>
  <Col w="1/3">
    <Card bg="grey-light" text="center" p="4" rounded="none">
      1/3
    </Card>
  </Col>
  <Col w="1/3">
    <Card bg="grey" text="center" p="4" rounded="none">
      1/3
    </Card>
  </Col>
  <Col w="1/3">
    <Card bg="grey-light" text="center" p="4" rounded="none">
      1/3
    </Card>
  </Col>
  <Col w="1/4">
    <Card bg="grey" text="center" p="4" rounded="none">
      1/4
    </Card>
  </Col>
  <Col w="1/4">
    <Card bg="grey-light" text="center" p="4" rounded="none">
      1/4
    </Card>
  </Col>
  <Col w="1/4">
    <Card bg="grey" text="center" p="4" rounded="none">
      1/4
    </Card>
  </Col>
  <Col w="1/4">
    <Card bg="grey-light" text="center" p="4" rounded="none">
      1/4
    </Card>
  </Col>
</Row>
```

### Responsive Columns

```jsx
<Row gutter>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
</Row>
```

### Auto Sized Columns

```jsx
<Row nowrap>
  <Col w="auto">
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w="auto">
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
  <Col w="auto">
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
</Row>
```
