Example:

```jsx
<Header>
  <NavBrand
    is={props => <a href="#header" {...props} />}
    font="semibold"
    text={['white', 'xl']}
  >
    <svg
      className="fill-current h-8 w-8 mr-2"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
    </svg>
    <span className="inline-block">Tailwind React</span>
  </NavBrand>
  <NavToggle />
  <NavMenu>
    <NavItem is={props => <a {...props} href="#header" />} active>
      Docs
    </NavItem>
    <NavItem is={props => <a {...props} href="#header" />}>Examples</NavItem>
    <NavItem is={props => <a {...props} href="#header" />}>Blog</NavItem>
    <OutlineButton border="white" text="white" text-hocus="blue">
      Download
    </OutlineButton>
  </NavMenu>
</Header>
```

Custom branding example:

```jsx
<Header bg="purple" text="white">
  <NavBrand
    font="semibold"
    text={['white', 'xl']}
    is={props => <a href="#header" {...props} />}
  >
    <svg
      className="fill-current h-8 w-8 mr-2"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
    </svg>
    <span className="inline-block">Tailwind React</span>
  </NavBrand>
  <NavToggle />
  <NavMenu>
    <NavItem is={props => <a {...props} href="#header" />} active>
      Docs
    </NavItem>
    <NavItem is={props => <a {...props} href="#header" />}>Examples</NavItem>
    <NavItem is={props => <a {...props} href="#header" />}>Blog</NavItem>
    <OutlineButton border="white" text="white" text-hocus="purple">
      Download
    </OutlineButton>
  </NavMenu>
</Header>
```
