'use strict'

const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.pots('https://api.netlify.com/build_hooks/60ad4ab6fff3141245d55814')
  },

  async afterUpdate(result, params, data) {
    axios.pots('https://api.netlify.com/build_hooks/60ad4ab6fff3141245d55814')
  },
}
