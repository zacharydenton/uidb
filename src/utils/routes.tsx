export function replaceSearchParam(
  searchParams: URLSearchParams,
  key: string,
  value: string,
): URLSearchParams {
  const newParams = new URLSearchParams(searchParams);
  newParams.set(key, value);
  return newParams;
}

export function removeSearchParam(
  searchParams: URLSearchParams,
  key: string,
): URLSearchParams {
  const newParams = new URLSearchParams(searchParams);
  newParams.delete(key);
  return newParams;
}
