import { dateFromString, isBefore } from './date-format'

export const required = (value) => (value ? undefined : 'Campo obrigatório')
export const trim = (value) => value && value.trim()

export const phoneMask = (value) => {
  const cleanValue = value && value.replace(/\D/g, '')
  const isHouse = cleanValue && cleanValue.length <= 10

  return (
    cleanValue &&
    cleanValue
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(isHouse ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d)+?$/, '$1')
  )
}

export const dateMask = (value) =>
  value &&
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)+?$/, '$1')

export const onlyNumber = (value) => value.replace(/[^\d]/g, '')
export const onlyChar = (value) => value.replace(/[0-9]/g, '')

export const validateEmail = (value) =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value) ? undefined : 'E-mail inválido'

export const validateName = (value) => {
  const nameArray = value.split(' ');
  const firstNameValid = nameArray[0].length >= 3;
  const lastNameValid = nameArray[1]?.length >= 3;
  return nameArray.length > 1 && firstNameValid  && lastNameValid? undefined : 'Nome inválido'
}

export const cpfMask = (value) =>
  value &&
  value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

export const validateCPF = (cpf) => {
  let isValid = false
  cpf = cpf.replace(/\D/g, '')

  if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    isValid = false
  } else {
    isValid = true
    ;[9, 10].forEach((j) => {
      let sum = 0
      let r
      cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach((e, i) => {
          sum += parseInt(e) * (j + 2 - (i + 1))
        })

      r = sum % 11
      r = r < 2 ? 0 : 11 - r
      if (r != cpf.substring(j, j + 1)) {
        isValid = false
      }
    })
  }

  return isValid ? undefined : 'CPF inválido'
}

export const minimumAge = (value) => {
  if (value.length < 10) {
    return 'Data inválida, use dia/mês/ano'
  }
  const date = dateFromString(value)
  const now = new Date()

  console.log(new Date(date));
  
  if (isBefore(now, date)) {
    return 'Data não pode ser maior que a a data minima.'
  }
  if (isBefore(date, new Date('1940-01-01')) || isNaN(new Date(date))) {
    return 'Data inválida.'
  }
  if (now.getFullYear() - date.getFullYear() < 18) {
    return 'Precisa ser maior de 18 anos.'
  }
  return undefined
}

// max length
const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Digite no máximo ${max} characteres.`
    : undefined

export const maxLength3 = maxLength(3)
export const maxLength11 = maxLength(11)
export const cardMaxLength = maxLength(19)

const minLength = (min) => (value) =>
  value && value.length < min
    ? `Digite no mínimo ${min} characteres.`
    : undefined

export const minLength3 = minLength(3)
export const minLength6 = minLength(6)
export const minLength10 = minLength(10)

export const minLengthPhone = (value) =>
  value && value.replace(/\D/g, '').length < 10
    ? `Digite no mínimo ${10} digitos.`
    : undefined

export const normalizeAll =
  (normalizers) => (value, previousValue, allValues, previousAllValues) => {
    let i = 0
    const normalizersLength = normalizers.length
    let currentValue = value
    while (i < normalizersLength) {
      const currentNormalizer = normalizers[i]
      if (typeof currentNormalizer === 'function') {
        currentValue = currentNormalizer(
          currentValue,
          previousValue,
          allValues,
          previousAllValues
        )
      }
      i++
    }

    return currentValue
  }
