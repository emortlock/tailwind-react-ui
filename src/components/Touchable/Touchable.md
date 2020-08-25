```jsx
import { Touchable, Image } from 'tailwind-react-ui'
const [count, setCount] = React.useState(0)
;<>
  <Touchable
    inlineBlock
    onTouch={() => setCount((count) => count + 1)}
    m={{ r: 4, b: 4 }}
  >
    <Image src="https://placekitten.com/200/200" alt="Example image" w={32} />
  </Touchable>

  <Touchable
    disabled
    inlineBlock
    onTouch={() => setCount((count) => count + 1)}
    m={{ r: 4, b: 4 }}
  >
    <Image src="https://placekitten.com/200/200" alt="Example image" w={32} />
  </Touchable>

  <div>
    You have clicked {count} {count === 1 ? 'time' : 'times'}
  </div>
</>
```
