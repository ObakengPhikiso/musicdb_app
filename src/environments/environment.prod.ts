const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';
export const environment = {
  production: true,
  baseUrl,
  search: baseUrl + '/search/artist',
  artists: baseUrl + '/user/2529/artists'
};