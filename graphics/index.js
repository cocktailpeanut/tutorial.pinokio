const os = require('os')
module.exports = async (kernel) => {
  const platform = os.platform()
  const graphics = await kernel.system.graphics()
  const vendor = graphics.controllers[0].vendor
  return {
    run: [{
      "method": "log",
      "params": {
        "json2": graphics.controllers
      }
    }, {
      "method": "notify",
      "params": {
        "html": platform
      }
    }]
  }
}
