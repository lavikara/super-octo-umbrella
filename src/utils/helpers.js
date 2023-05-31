export const isNumber = (number) => {
  if (isNaN(number)) {
    return false
  } else {
    return true
  }
}

export const addCommaToNumber = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export const emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const selectValidation = (option, optionList) => {
  return optionList.includes(option)
}

export const formatAmountToDollar = (amount, decimal, currency) => {
  if (amount === undefined) return
  const value = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimal
  })
  return value.format(amount)
}
