# set-all-effing-values

Set all effing values of a plain object to whatever (no recursion). Why? Because, why the eff not.

```
yarn add set-all-effing-values
```

## Example

```javascript
import setAllEffingValues from 'set-all-effing-values';

const foo = {
  bar: 'Hello Katamaran',
  krangel: 13,
  bistro: [1, 2, 3],
  noRecursion: {
    kriek: 'bingBong'
  }
};

const newValues = setAllEffingValues(foo, 'bow to me');

/*

newValues = {
  bar: 'bow to me',
  krangel: 'bow to me',
  bistro: 'bow to me',
  noRecursion: 'bow to me'
}

*/
```
