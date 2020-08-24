```jsx
initialState = { clicked: 0 }
;<div>
  <Touchable
    inlineBlock
    onTouch={() => setState({ clicked: state.clicked + 1 })}
    m={{ r: 4, b: 4 }}
  >
    <Image src="https://placekitten.com/200/200" alt="Example image" w={32} />
  </Touchable>

  <Touchable
    disabled
    inlineBlock
    onTouch={() => setState({ clicked: state.clicked + 1 })}
    m={{ r: 4, b: 4 }}
  >
    <Image src="https://placekitten.com/200/200" alt="Example image" w={32} />
  </Touchable>

  <div>
    You have clicked {state.clicked} {state.clicked === 1 ? 'time' : 'times'}
  </div>
</div>
```
