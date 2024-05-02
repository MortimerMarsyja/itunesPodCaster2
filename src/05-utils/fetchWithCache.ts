// we do not know what the response will be
const cache: { [key: string]: any } = {};

export async function fetchWithCache(url: string) {
  const key = btoa(url);

  if (cache[key]) {
    return cache[key];
  }

  const response = await fetch(url);
  const data = await response.json();

  cache[key] = data;

  return data;
}
