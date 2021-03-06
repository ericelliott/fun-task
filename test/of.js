// @flow

import _test from 'lobot/test'
import Task from '../src'

const test = _test.wrap('of')

test('passes value to cb', 1, t => {
  Task.of(2).run(t.calledWith(2))
})

test('this==undefined in cd', 1, t => {
  Task.of(2).run(function() { t.equal(this, undefined) })
})


// Flow tests

Task.of(1).run({
  success(x) {
    // $FlowFixMe
    (x: string)
  },
})

Task.of(1).run(x => {
  // $FlowFixMe
  (x: string)
})
