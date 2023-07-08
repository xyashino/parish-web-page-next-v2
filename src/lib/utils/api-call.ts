const defaultConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiCall = async <T>(
  url: string,
  config?: RequestInit,
  override = true
): Promise<T> => {
  const result = await fetch(
    "http://localhost:3000" + url,
    override ? { ...defaultConfig, ...config } : config
  );
  const parsedResult = await result.json();
  if (result.status !== 200) {
    throw new Error(parsedResult.message || "Something went wrong!");
  }
  return parsedResult;
};
