
// Detects if device is on iOS
export const isIos = (global=window) => {
  const userAgent = global.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
export const isInStandaloneMode = (global=window) => {
 return ('standalone' in global.navigator) && (global.navigator.standalone);
}
