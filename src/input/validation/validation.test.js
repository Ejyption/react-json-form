import {
  validateInput,
  validateEmail,
  validateNumber,
  validateRequired
} from './index'

describe('Validate Required', () => {
  it('should return true', () => {
    const res = validateRequired('D')
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateRequired(1)
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateRequired(true)
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateRequired(['a', 'b'])
    expect(res).toBe(true)
  })
  it('should return false', () => {
    const res = validateRequired(0)
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateRequired(false)
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateRequired(null)
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateRequired(undefined)
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateRequired([])
    expect(res).toBe(false)
  })
})

describe('Validate Number', () => {
  it('should return true', () => {
    const res = validateNumber(0)
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateNumber(1)
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateNumber(1.456)
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateNumber('1.456')
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateNumber(undefined)
    expect(res).toBe(true)
  })
  it('should return false', () => {
    const res = validateNumber('D')
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateNumber(null)
    expect(res).toBe(false)
  })
})

describe('Validate Email', () => {
  it('should return true', () => {
    const res = validateEmail('Emad@example.co.nz')
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateEmail('Emad@example.more.com')
    expect(res).toBe(true)
  })
  it('should return true', () => {
    const res = validateEmail('Emad@example.com')
    expect(res).toBe(true)
  })
  it('should return false', () => {
    const res = validateEmail('Hi there')
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateEmail(12)
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateEmail('Emad@example')
    expect(res).toBe(false)
  })
  it('should return false', () => {
    const res = validateEmail('Emad@example.coom')
    expect(res).toBe(false)
  })
})

describe('Validate Input', () => {
  it('should return error string', () => {
    const res = validateInput('', { required: true })
    expect(res.err).toBe('Required')
  })
  it('should return null', () => {
    const res = validateInput('ABC', { required: true })
    expect(res).toEqual({})
  })
  it('should return error string', () => {
    const res = validateInput('Emad', { type: 'number' })
    expect(res.err).toBe('Invalid')
  })
  it('should return error string', () => {
    const res = validateInput('', { required: true, type: 'number' })
    expect(res.err).toBe('Required')
  })
  it('should return error string', () => {
    const res = validateInput('A', { required: true, type: 'number' })
    expect(res.err).toBe('Invalid')
  })
  it('should return null', () => {
    const res = validateInput('12.5', { required: true, type: 'number' })
    expect(res).toEqual({})
  })
  it('should return null', () => {
    const res = validateInput('Emad@example.com', {
      required: true,
      type: 'email'
    })
    expect(res).toEqual({})
  })
  it('should return null', () => {
    const res = validateInput('12.5', { required: true, type: 'email' })
    expect(res.err).toBe('Invalid')
  })
})
