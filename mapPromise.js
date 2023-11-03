function mapPromise(promise, transformF) {
  return promise.then(res => {
    return transformF(res)
  }, () => 'Something went wrong!')
}
// mapPromise(Promise.resolve(5), (val) => val * 2).then(res=>console.log(res))
mapPromise(Promise.reject('err'), (val) => val * 2).then(err => console.log(err))