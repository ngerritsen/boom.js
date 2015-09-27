import { boom, tak } from '..'

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
