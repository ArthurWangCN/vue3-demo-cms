const EXPIRE_TIME = 24 * 60 * 60 * 1000 

export const setTokenTime = () => {
  localStorage.setItem('tokentime', Date.now())
}

export const getTokenTime = () => {
  return localStorage.getItem('tokentime')
}

export const isTokenExpire = () => {
  if (getTokenTime()) {
    return Date.now() - getTokenTime() > EXPIRE_TIME
  }
}
