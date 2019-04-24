const toml = require('toml')

class TomlTransformer {
  static mimeTypes () {
    return ['text/x-toml']
  }

  parse (source) {
    const data = toml.parse(source)

    const fields = { data }

    return { fields }
  }
}

module.exports = TomlTransformer
