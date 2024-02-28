export const isEmpty = (value) => {
    const hasOwnProperty = Object.prototype.hasOwnProperty
    if (value == null || value == undefined || value == 'undefined') {
      return true
    }
    if ((value != null && typeof value !== 'function') && Array.isArray(value)) {
      return !value.length
    }
    if (typeof value === "object") {
      return !Object.keys(value).length
    }
    for (const key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false
      }
    }
    return true
  }