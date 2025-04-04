import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useFetch({
  queryKey,
  fetcher,
  enabled = true,
  staleTime = 5 * 60 * 1000,
  cacheTime = 10 * 60 * 1000,
  onSuccess,
  onError,
  dataPath = "data",
}) {
  const result = useQuery({
    queryKey,
    queryFn: fetcher,
    enabled,
    staleTime,
    cacheTime,
    onSuccess,
    onError,
  });

  // Extract data based on the specified path
  const extractData = () => {
    if (!result.data) return null;

    // If dataPath is null or false, return the entire response
    if (dataPath === null || dataPath === false) {
      return result.data;
    }

    // If dataPath is a string, use it as a path to extract data
    if (typeof dataPath === "string") {
      const paths = dataPath.split(".");
      return paths.reduce(
        (obj, path) => (obj && obj[path] !== undefined ? obj[path] : null),
        result.data,
      );
    }

    // If dataPath is a function, call it with the response
    if (typeof dataPath === "function") {
      return dataPath(result.data);
    }

    // Default: return result.data.data
    return result.data.data;
  };

  return {
    data: extractData(),
    response: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
    refetch: result.refetch,
    isRefetching: result.isRefetching,
    status: result.status,
  };
}

/**
 * Custom hook for mutations with React Query
 */
export function useMutate({
  mutationFn,
  onSuccess,
  onError,
  onSettled,
  invalidateQueries,
  updateCache,
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      // Invalidate queries if specified
      if (invalidateQueries) {
        invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
      }

      // Update cache if specified
      if (updateCache) {
        const queryKey = invalidateQueries?.[0];
        if (queryKey) {
          queryClient.setQueryData(queryKey, (oldData) =>
            updateCache(oldData, data, variables),
          );
        }
      }

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess(data, variables);
      }
    },
    onError,
    onSettled,
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    reset: mutation.reset,
  };
}
