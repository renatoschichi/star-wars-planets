export const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x)
export const map = <T, U>(fn: (v: T) => U) => (arr: T[]) => arr.map(fn)
export const filter = <T>(fn: (v: T) => boolean) => (arr: T[]) => arr.filter(fn)
export const sortBy = <T>(keyFn: (v: T) => string) => (arr: T[]) =>
  [...arr].sort((a, b) => {
    const A = keyFn(a).toLowerCase()
    const B = keyFn(b).toLowerCase()
    if (A < B) return -1
    if (A > B) return 1
    return 0
  })