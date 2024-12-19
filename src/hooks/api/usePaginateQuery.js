import { useQuery } from "react-query";
import { request } from "../../services/api";
import {useTranslation} from "react-i18next";

const usePaginateQuery = ({
  key = "get-all",
  url = "/",
  page = 1,
  params = {},
  showSuccessMsg = false,
  showErrorMsg = false,
}) => {
  const {t} = useTranslation()
  const { isLoading, isError, data, error, isFetching, refetch} = useQuery(
    [key, page, params],
    () => request.get(`${url}?page=${page}`, params),
    {
      keepPreviousData: true,
      onSuccess: () => {
        if (showSuccessMsg) {

        }
      },
      onError: (data) => {
        if (showErrorMsg) {

        }
      },
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isFetching,
    refetch
  };
};

export default usePaginateQuery;
