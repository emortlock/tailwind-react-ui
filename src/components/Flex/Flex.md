Extends `Box` with helper props to manage flex layouts

```jsx
import { Flex, Box } from 'tailwind-react-ui'
;<>
  <Flex>
    <Box p={4} bg="gray-300" flex={1} text="center">
      1
    </Box>
    <Box p={4} bg="gray-400" flex={1} text="center">
      2
    </Box>
  </Flex>
</>
```

Can set the direction by using the `col` prop

```jsx
import { Flex, Box } from 'tailwind-react-ui'
;<>
  <Flex col>
    <Box p={4} bg="gray-300" text="center">
      1
    </Box>
    <Box p={4} bg="gray-400" text="center">
      2
    </Box>
  </Flex>
</>
```

Can switch the order using `reverse`

```jsx
import { Flex, Box } from 'tailwind-react-ui'
;<>
  <Flex reverse m={{ b: 4 }}>
    <Box p={4} bg="gray-300" flex={1} text="center">
      1
    </Box>
    <Box p={4} bg="gray-400" flex={1} text="center">
      2
    </Box>
  </Flex>

  <Flex col reverse>
    <Box p={4} bg="gray-300" text="center">
      1
    </Box>
    <Box p={4} bg="gray-400" text="center">
      2
    </Box>
  </Flex>
</>
```

Use `wrap` or `wrapReverse` to control how overflow content is handled

```jsx
import { Flex, Box } from 'tailwind-react-ui'
;<>
  <Flex wrap m={{ b: 4 }}>
    <Box p={4} w="2/5" bg="gray-300" text="center">
      1
    </Box>
    <Box p={4} w="2/5" bg="gray-400" text="center">
      2
    </Box>
    <Box p={4} w="2/5" bg="gray-500" text="center">
      3
    </Box>
  </Flex>

  <Flex wrapReverse>
    <Box p={4} w="2/5" bg="gray-300" text="center">
      1
    </Box>
    <Box p={4} w="2/5" bg="gray-400" text="center">
      2
    </Box>
    <Box p={4} w="2/5" bg="gray-500" text="center">
      3
    </Box>
  </Flex>
</>
```
