Simple wrapper around the `<footer />` element

### Example

```jsx
<Footer>
  <Text is="p">&copy; E Corp {new Date().getFullYear()}</Text>
  <Text size="sm">
    Cookies are used by our fictional third party partners to track your
    browsing habits, DNA and thoughts. View our{' '}
    <Text is="a" href="#footer" text="white" text-hover="purple-dark">
      privacy policy
    </Text>{' '}
    to attempt to manage your preferences.
  </Text>
</Footer>
```
