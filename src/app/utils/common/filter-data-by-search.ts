export function filterDataBySearch<T>(data: T[], propKey: keyof T, value: string) {
  if (data.length === 0 || value === '') return data;

  return data.filter((item) => {
    const propValue = item[propKey];
    const fallbackValue = typeof propValue === 'string' ? propValue : '';

    return fallbackValue.toLowerCase().includes(value.toLowerCase());
  });
}
