export const isLoggedIn = (user) => {
  if (user !== undefined && user.hasOwnProperty('token')) {
    return true;
  }
  return false;
}