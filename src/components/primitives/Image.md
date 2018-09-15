```jsx
<Image src="https://placekitten.com/200/200" alt="Example image" w={64} />
```

Displays a placeholder whilst loading, use the `aspectRatio`, `bg` & `text` props to customise how that looks:

```jsx
<Image
  // src="https://placekitten.com/355/200"
  alt="Example image that fails to load"
  w={64}
  bg="blue-dark"
  text="white"
  aspectRatio={16 / 9}
/>
```

You can pass `children` to the component in order to have content overlay the image which will render inside a `flex` container

```jsx
<Image src="https://placekitten.com/200/200" alt="Example image" w={64}>
  <Box
    p={2}
    text={['center', 'white']}
    flex={1}
    bg="blue"
    style={{ backgroundColor: 'rgba(52,144,220,0.75)' }}
  >
    Hello
  </Box>
</Image>
```
