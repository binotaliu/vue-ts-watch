export const clone: <T>(v: T) => T = (v) => JSON.parse(JSON.stringify(v))

