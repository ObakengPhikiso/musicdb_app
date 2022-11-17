const baseUrl = 'https://musicdb-proxy-server.vercel.app/v1';
export const environment = {
  production: true,
  baseUrl,
  search: baseUrl + '/search/artists',
  artists: baseUrl + '/artists/700513741'
};
