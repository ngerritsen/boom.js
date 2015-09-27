Boom is dutch for tree. boom.js is a simple library for building DOM trees. Just place a `boom` (tree), pass it a container selector and some `takken` (branches) and it will render the DOM tree you specified in the container. This allows you to programmatically render DOM trees. Minified just ~1kb, no jQuery or other dependencies needed.

## Usage
Install via npm:

    npm install boom.js

Import in app
```js
//ES5
var boom = require('boom.js').boom
var tak = require('boom.js').tak

//ES6 :)
import { boom, tak } from 'boom.js'
```

Or just include boom.js/boom.min.js and `boom` and `tak` will be globally available
```html
<script src="node_modules/dist/boom.min.js"></script>
```

## Example
```js
//Example in ES6
import { boom, tak } from 'boom.js'

const ingredients = [
  { name: 'Eggs', amount: '2' },
  { name: 'Milk', amount: '500ml' },
  { name: 'Sugar', amount: '300g' },
  { name: 'Vanilla sugar', amount: '50g' }
]

boom('#container', [
  tak('h1', 'Recipe', { class: 'title'}),
  tak('p', 'Ingredients:'),
  tak('ul', '', { class: 'ingredient-list' }, ingredients.map((ingredient) =>
    tak('li', ingredient.name + ' - ', {}, [
      tak('span', ingredient.amount, { class: 'unit' })
    ])
  )),
  tak('img', '', { src: 'http://lorempixel.com/400/200/food' })
])
```
## Api
#### boom(containerSelector: String, takken: Array<tak>)
Creates a new `boom` (tree) with the provided `takken` (branches) and renders it in the container provided

#### tak(tagName: string, [content: String], [attributes: Object<name, value>], [children: Array<tak>])
Creates a new `tak` (branch) which represents a DOM node. Takes a tag name (required), text content(optional), attributes as key value pairs(optional) and children as an array of other `takken` (branches) also optional.
