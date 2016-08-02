// @flow

import _test from 'lobot/test'
import Task from '../src'

const test = _test.wrap('rejected')

test('passes value to cb', 1, t => {
  Task.rejected(2).run({success: t.fail, failure: t.calledWith(2)})
})

test('default onFail works', 1, t => {
  t.throws(() => { Task.rejected('err1').run({}) }, /err1/)
})

test('this==undefined in cd', 1, t => {
  Task.rejected(2).run({failure() { t.equal(this, undefined) }})
})
