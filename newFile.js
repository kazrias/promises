function resolveReject(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (typeof param) {
        case 'string':
          resolve(param.toUpperCase())
          break;
        default:
          reject(param)
      }
    }, 500)
  })
}
