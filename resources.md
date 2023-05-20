# Effect Hook and Rules of Hooks

## Don’t call Hooks inside Conditions

```js
const Welcome = () => {
  if (true) {
    const [count, setCount] = useState(0)
  }
  return <h1>Welcome</h1>
}
```

## Don’t call Hooks inside Loops

```js
const Welcome = () => {
  for (let i = 0; i <= 0; i += 1) {
    useEffect(() => {
      document.title = 'Welcome'
    })
  }

  return <h1>Welcome</h1>
}
```

## Don’t call Hooks inside JS Functions

```js
const add = (a, b) => {
  useEffect(() => {
    document.title = 'Welcome'
  })
  return a + b
}

const Welcome = () => <h1>{add(1, 2)}</h1>
```
