const toml = require('toml')

class TomlTransformer {
  static mimeTypes () {
    return ['text/toml']
  }

  parse (content) {
    const data = toml.parse(content)

    const fields = typeof data !== 'object' || Array.isArray(data)
      ? { data }
      : data

    return { fields }
  }
}

module.exports = TomlTransformer
