simple-fixtures
===============

Easily generate fixtures.

Sample usage:

```
import { generateFixture, generateFixtures } from 'simple-fixtures';

generateFixture({ foo: 'bar', random: Math.random });
// { foo: 'bar', random: 0.985858026093424 }

generateFixtures({ foo: Math.random, bar: Date.now }, 4);
// [ { foo: 0.014792930703941831, bar: 1499255429769 },
//   { foo: 0.7412517651786374, bar: 1499255429769 },
//   { foo: 0.022159720489655754, bar: 1499255429769 },
//   { foo: 0.7087271890130045, bar: 1499255429769 } ]
```
