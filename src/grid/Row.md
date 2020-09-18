```jsx
import { Row, Col } from 'tailwind-react-ui'
;<>
  <Row>
    <Col bg="gray-400" text="center" p="4">
      1/1
    </Col>
    <Col w="1/2" bg="gray-300" text="center" p="4">
      1/2
    </Col>
    <Col w="1/2" bg="gray-400" text="center" p="4">
      1/2
    </Col>
    <Col w="1/3" bg="gray-300" text="center" p="4">
      1/3
    </Col>
    <Col w="1/3" bg="gray-400" text="center" p="4">
      1/3
    </Col>
    <Col w="1/3" bg="gray-300" text="center" p="4">
      1/3
    </Col>
    <Col w="1/4" bg="gray-400" text="center" p="4">
      1/4
    </Col>
    <Col w="1/4" bg="gray-300" text="center" p="4">
      1/4
    </Col>
    <Col w="1/4" bg="gray-400" text="center" p="4">
      1/4
    </Col>
    <Col w="1/4" bg="gray-300" text="center" p="4">
      1/4
    </Col>
  </Row>
</>
```

### Gutters

```jsx
import { Row, Col, Card } from 'tailwind-react-ui'
;<>
  <Row gutter>
    <Col>
      <Card bg="gray-400" text="center" p="4" rounded="none">
        1/1
      </Card>
    </Col>
    <Col w="1/2">
      <Card bg="gray-300" text="center" p="4" rounded="none">
        1/2
      </Card>
    </Col>
    <Col w="1/2">
      <Card bg="gray-400" text="center" p="4" rounded="none">
        1/2
      </Card>
    </Col>
    <Col w="1/3">
      <Card bg="gray-300" text="center" p="4" rounded="none">
        1/3
      </Card>
    </Col>
    <Col w="1/3">
      <Card bg="gray-400" text="center" p="4" rounded="none">
        1/3
      </Card>
    </Col>
    <Col w="1/3">
      <Card bg="gray-300" text="center" p="4" rounded="none">
        1/3
      </Card>
    </Col>
    <Col w="1/4">
      <Card bg="gray-400" text="center" p="4" rounded="none">
        1/4
      </Card>
    </Col>
    <Col w="1/4">
      <Card bg="gray-300" text="center" p="4" rounded="none">
        1/4
      </Card>
    </Col>
    <Col w="1/4">
      <Card bg="gray-400" text="center" p="4" rounded="none">
        1/4
      </Card>
    </Col>
    <Col w="1/4">
      <Card bg="gray-300" text="center" p="4" rounded="none">
        1/4
      </Card>
    </Col>
  </Row>
</>
```

### Responsive Columns

```jsx
import { Row, Col, Card } from 'tailwind-react-ui'
;<>
  <Row gutter>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-400" p={4} h={12} rounded="none" />
    </Col>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-300" p={4} h={12} rounded="none" />
    </Col>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-400" p={4} h={12} rounded="none" />
    </Col>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-300" p={4} h={12} rounded="none" />
    </Col>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-400" p={4} h={12} rounded="none" />
    </Col>
    <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
      <Card bg="gray-300" p={4} h={12} rounded="none" />
    </Col>
  </Row>
</>
```

### Auto Sized Columns

```jsx
import { Row, Col, Card } from 'tailwind-react-ui'
;<>
  <Row nowrap>
    <Col w="auto">
      <Card bg="gray-400" p={4} h={12} rounded="none" />
    </Col>
    <Col w="auto">
      <Card bg="gray-300" p={4} h={12} rounded="none" />
    </Col>
    <Col w="auto">
      <Card bg="gray-400" p={4} h={12} rounded="none" />
    </Col>
  </Row>
</>
```
