# API comparison with Promises

| Task                                     | Promise &amp; comments                   |
| ---------------------------------------- | ---------------------------------------- |
| `Task.create(computation)`               | `new Promise(computation)`               |
| `Task.of(x)`                             | `Promise.resolve(x)`<br/><br/>With Promises behaviour is different if `x` is a Promise (this makes writing generic code more difficult with Promises). |
| `Task.rejected(x)`                       | `Promise.reject(x)`                      |
| `task.map(fn)`                           | `promise.then(fn)`<br/><br/>With Promises behaviour is different if `fn` returns a Promise. |
| `task.chain(fn)`                         | `promise.then(fn)`                       |
| `task.mapRejected(fn)`                   | `promise.then(undefined, fn)`<br/><br/>With Promises behaviour is different if `fn` returns a Promise. |
| `task.orElse(fn)`                        | `promise.then(undefined, fn)`            |
| `task.ap(otherTask)`                     | `promise.then(fn => otherPromise.then(fn))`<br/><br/>This method exists mainly for compliance with [Fantasy Land Specification](https://github.com/fantasyland/fantasy-land).<br/><br/>With Promises behaviour is different if `fn` returns a Promise.  |
| `Task.empty()`                           | `new Promise(() => {})`                  |
| `task.concat(otherTask)`                 | `Promise.race([promose, otherPromise])`<br/><br/>Also mainly for Fantasy Land, makes Task a [Monoid](https://github.com/fantasyland/fantasy-land#monoid). |
| `Task.parallel(tasks)`                        | `Promise.all(promises)`                  |
| `Task.race(tasks)`                       | `Promise.race(promises)`                 |
| `Task.run({success, failure})`         | `Promise.then(successOrFailure)` <br/><br/>In Promises second callback is for exceptions. More about it [here](./exceptions.md). |
| `Task.run({success, failure, catch})` | `Promise.then(successOrFailure, catch)`<br/><br/>By default tasks don't catch exceptions thrown from `map`, `chain` etc. But we can choose to catch them by providing `catch` callback. Also notice that exceptions go into their own callback. |
| `cancel = task.run(...); cancel()`       | Promises don't support cancelation or even unsubscribing. |
