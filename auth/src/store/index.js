import configDev from './config.dev'
import configProd from './config.prod'

if (process.env.NODE_ENV === 'production') {
  module.exports = configProd
} else {
  module.exports = configDev
}

