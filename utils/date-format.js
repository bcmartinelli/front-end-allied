const dateFormat = (date1, format, options = dateFormats) => {
  try {
    const date = date1
    const len = format.length
    let token = ''
    let res = ''
    let formatter = ''
    let i = 0
    let i2 = 0

    for (i = 0; i < len; i++) {
      token = format.charAt(i)
      for (i2 = len; i2 > i; i2--) {
        formatter = dateFormatters[format.substring(i, i2)]
        if (formatter) {
          if (date) {
            res += formatter(date, options)
          }
          i = i2 - 1
          break
        }
      }
      if (i2 === i) {
        if (date) {
          res += token
        }
      }
    }
    return res
  } catch (error) {
    return new Error('Data invalida')
  }
}

const convertDate = (value) => {
  const dataSplit = value.split('/')
  if (!(dataSplit.length === 3)) {
    console.warn('invalid date')
    return null
  }
  return `${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}`
}

const dateFromString = (value) => {
  const dataSplit = value.split('/')
  if (!(dataSplit.length === 3)) {
    console.warn('invalid date')
    return null
  }
  return new Date(`${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}:00:00`)
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const dateFormats = {
  default: 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  soDateTime: "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
}

const zeroPad = (n) => (n < 10 ? '0' : '') + n;

const isBefore = (first, second) =>
  new Date(first.toDateString()) < new Date(second.toDateString())

const dateFormatters = {
  s: (d) => d.getSeconds(),
  ss: (d) => zeroPad(d.getSeconds()),
  M: (d) => d.getMinutes(),
  MM: (d) => zeroPad(d.getMinutes()),
  h: (d) => d.getHours() % 12 || 12,
  hh: (d) => zeroPad(d.getHours() % 12 || 12),
  H: (d) => d.getHours(),
  HH: (d) => zeroPad(d.getHours()),
  d: (d) => d.getDate(),
  dd: (d) => zeroPad(d.getDate()),
  ddd: (d) => dayNames[d.getDay()],
  dddd: (d) => dayNames[d.getDay() + 7],
  m: (d) => d.getMonth() + 1,
  mm: (d) => zeroPad(d.getMonth() + 1),
  mmm: (d) => monthNames[d.getMonth()],
  mmmm: (d) => monthNames[d.getMonth() + 12],
  yy: (d) => `${d.getFullYear()}`.substring(2),
  yyyy: (d) => d.getFullYear(),
  t: (d) => (d.getHours() < 12 ? 'a' : 'p'),
  tt: (d) => (d.getHours() < 12 ? 'am' : 'pm'),
  T: (d) => (d.getHours() < 12 ? 'A' : 'P'),
  TT: (d) => (d.getHours() < 12 ? 'AM' : 'PM'),
  u: (d) => dateFormat(d, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
  S: (d) => {
    const date = d.getDate()
    if (date > 10 && date < 20) {
      return 'th'
    }
    return ['st', 'nd', 'rd'][(date % 10) - 1] || 'th'
  },

  Z: (d) => {
    const timezone =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
    const timezoneClip = /[^-+\dA-Z]/g
    return (String(d).match(timezone) || ['']).pop().replace(timezoneClip, '')
  },
}

export { dateFormat, isBefore, dateFromString, convertDate }
