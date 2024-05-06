import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter - server-side/api filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // Sort - server-side/api sort
  const sortByConst = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByConst.split("-");
  const sortBy = { field, direction };

  // Pagination - server-side
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // using react-query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    // from the api function on services
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // pre-fetch
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      // from the api function on services
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      // from the api function on services
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, bookings, count };
}
