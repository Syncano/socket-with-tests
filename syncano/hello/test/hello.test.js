import {assert} from 'chai'
import {run} from 'syncano-test'


describe('hello', function() {
  it('simple run', function(done) {
    run('hello', {}, {})
      .then(response => {
        assert.equal(response.data.msg, 'Hello World!')
        done()
      })
  })
})
