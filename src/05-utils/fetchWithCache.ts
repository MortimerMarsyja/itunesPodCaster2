async function fetchWithCache(url: string) {
  const key = btoa(url);
  const hasKey = await window.caches.has(key);
  const expirationTime = Date.now() + 1000 * 60 * 60 * 24;

  if (hasKey) {
    const cache = await window.caches.open(key);
    const response = await cache.match(key);
    const cachedData = await response?.json();

    if (cachedData && cachedData.expirationTime > Date.now()) {
      return cachedData.data;
    }
  }

  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 200 && response.status < 300) {
    const cache = await window.caches.open(key);
    const cacheData = new Response(JSON.stringify({ data, expirationTime }), {
      headers: { "Content-Type": "application/json" },
    });
    cache.put(key, cacheData);

    setTimeout(
      async () => {
        const cache = await window.caches.open(key);
        cache.delete(key);
      },
      1000 * 60 * 60 * 24
    );
  }
  return data;
}

export default fetchWithCache;
