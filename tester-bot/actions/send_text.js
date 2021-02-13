const _ = require('lodash')
    if (event.type === 'text') {
      const text = _.get(event, 'text')
      console.log(text)
      //...
}