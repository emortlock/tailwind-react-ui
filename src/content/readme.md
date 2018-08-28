Selection of pretty simplistic wrappers around their related HTML5 elements, but provides `aria-labelledby` functionality if combined with the `ContentTitle` component (which is a proxy for [`<Title />`](#typography)).

The sections will also remove any bottom margin from the final element (so long as it supports tailwind-react props), to avoid increased spacing at the bottom of that section.

### Article

```jsx
<Article>
  <ContentTitle size={5}>Article Title</ContentTitle>
  <Text is="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
</Article>
```

### Section

```jsx
<Section>
  <ContentTitle size={4}>Section Title</ContentTitle>
  <Text is="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
</Section>
```

### Aside

```jsx
<Aside>
  <ContentTitle size={3}>Aside Title</ContentTitle>
  <Text is="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
</Aside>
```
