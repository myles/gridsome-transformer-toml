const TomlTransformer = require('../index')

test('parse string', async () => {
  const transformer = new TomlTransformer()
  const res = transformer.parse('str = "I am a string."')

  expect(res.fields.data).toEqual({'str': 'I am a string.'})
})

test('parse boolean', async () => {
  const transformer = new TomlTransformer()
  const res = transformer.parse('bool1 = true\nbool2 = false')

  expect(res.fields.data).toEqual({'bool1': true, 'bool2': false})
})

test('parse numbers', async () => {
  const transformer = new TomlTransformer()
  const res = transformer.parse('int = 42\nfloat = 3.14')

  expect(res.fields.data).toEqual({'int': 42, 'float': 3.14})
})

test('parse list', async () => {
  const transformer = new TomlTransformer()
  const res = transformer.parse('arr = ["hello", "world"]')

  expect(res.fields.data).toHaveLength(1)
  expect(res.fields.data).toEqual({'arr': ['hello', 'world']})
})
