import { getEvents } from "../api/eventApi";
import { useFetch } from "./useFetch";
import { format, parseISO } from "date-fns";

export const QUERY_KEYS = {
  userEvents: "userEvents",
};

const groupEventsByDate = (events) => {
  if (!events || events.length === 0) return [];

  const grouped = events.reduce((acc, event) => {
    const date = event.start_time.split(" ")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([date, events]) => ({
      date,
      events,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const formatEventTime = (dateTimeString) => {
  try {
    const date = parseISO(dateTimeString);
    return format(date, "h:mm a");
  } catch (error) {
    return "Time not available";
  }
};

export const formatDate = (dateStr) => {
  try {
    const date = parseISO(dateStr);
    return format(date, "do, MMMM yyyy");
  } catch (error) {
    return dateStr;
  }
};

export const useUserEvents = (token) => {
  const {
    data: events,
    isLoading,
    error,
    refetch,
  } = useFetch({
    queryKey: [QUERY_KEYS.userEvents, token],
    fetcher: async () => {
      const response = await getEvents(token);
      return response;
    },
    enabled: !!token,
  });

  const groupedEvents = events ? groupEventsByDate(events) : [];

  return {
    events: events || [],
    groupedEvents,
    isLoading,
    error,
    refetch,
  };
};
