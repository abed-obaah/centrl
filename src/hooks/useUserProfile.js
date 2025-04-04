import { useFetch, useMutate } from "./useFetch";
import { getUserProfile, updateProfileImages } from "../api/userApi";

export const QUERY_KEYS = {
  userProfile: "userProfile",
};

export const useUserProfile = (token) => {
  const { data, isLoading, error, refetch } = useFetch({
    queryKey: [QUERY_KEYS.userProfile, token],
    fetcher: () => getUserProfile(token),
    enabled: !!token,
    dataPath: null,
  });

  // Extract user and profile from data
  const userProfile = data?.user || null;
  const profileDetails = data?.profile || null;

  // Mutation for updating profile image
  const profileImageMutation = useMutate({
    mutationFn: (file) => updateProfileImages(token, null, file),
    updateCache: (oldData, newData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        data: {
          ...oldData.data,
          profile: {
            ...oldData.data.profile,
            profile_image: newData.data.profile.profile_image,
          },
        },
      };
    },
    invalidateQueries: [[QUERY_KEYS.userProfile, token]],
  });

  // Mutation for updating banner image
  const bannerImageMutation = useMutate({
    mutationFn: (file) => updateProfileImages(token, file, null),
    updateCache: (oldData, newData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        data: {
          ...oldData.data,
          profile: {
            ...oldData.data.profile,
            banner_image: newData.data.profile.banner_image,
          },
        },
      };
    },
    invalidateQueries: [[QUERY_KEYS.userProfile, token]],
  });

  return {
    userProfile,
    profileDetails,
    isLoading,
    error,
    refetch,
    updateProfileImage: profileImageMutation.mutate,
    isUpdatingProfileImage: profileImageMutation.isLoading,
    updateBannerImage: bannerImageMutation.mutate,
    isUpdatingBannerImage: bannerImageMutation.isLoading,
  };
};
