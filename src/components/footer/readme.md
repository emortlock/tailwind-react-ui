Simple wrapper around the `<footer />` element

### Example

```jsx
<Footer>
  <Text is="p">&copy; E Corp {new Date().getFullYear()}</Text>
  <Text size="sm">
    Cookies are used by our fictional third party partners to track your
    browsing habits, DNA and thoughts. View our{' '}
    <a href="#footer" className="text-white hover:text-black">
      privacy policy
    </a>{' '}
    to attempt to manage your preferences.
  </Text>
</Footer>
```
