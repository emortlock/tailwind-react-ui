### Titles

```jsx
<Title size={6}>Title 6</Title>
<Title size={5}>Title 5</Title>
<Title size={4}>Title 4</Title>
<Title size={3}>Title 3</Title>
<Title size={2}>Title 2</Title>
<Title size={1}>Title 1</Title>
```

### Subtitles

```jsx
<Title size={6} subtitle>Subtitle 6</Title>
<Title size={5} subtitle>Subtitle 5</Title>
<Title size={4} subtitle>Subtitle 4</Title>
<Title size={3} subtitle>Subtitle 3</Title>
<Title size={2} subtitle>Subtitle 2</Title>
<Title size={1} subtitle>Subtitle 1</Title>
```

### Text

Standard inline body copy:

```jsx
<Text>Hello World</Text>
```

Lead text as a `<p />` element:

```jsx
<Text p lead>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</Text>
```

Inline font styles:

```jsx
<Text p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.{' '}
  <Text bold>Ut enim ad minim veniam</Text>, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
  <Text italic>Excepteur sint occaecat cupidatat non proident</Text>, sunt in
  culpa qui officia deserunt mollit anim id est laborum.
</Text>
```

#### Brand Text

Brand colour variants of `<Text />`

Info:

```jsx
<InfoText p>Simple info text</InfoText>

<InfoText alert>Simple info text</InfoText>
```

Danger

```jsx
<DangerText p>Simple danger text</DangerText>

<DangerText alert>Simple danger text</DangerText>
```
