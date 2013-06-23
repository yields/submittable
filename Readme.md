
# submittable

  check if the given form element is submittable.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/submittable

## Example

```js
submittable('<input type="text" name="baz">'); // > true
submittable('<select></select>'); // > false
submittable('<input type="checkbox" name="baz" checked>'); // > true
submittable('<input type="submit" name="foo">'); // > false
```

## License

  MIT
