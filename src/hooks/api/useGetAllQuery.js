import {useQuery} from 'react-query'
import {request} from "../../services/api";
import {useTranslation} from "react-i18next";
import {get} from "lodash";

const useGetAllQuery = ({
                            key = "get-all",
                            url = "/",
                            params = {},
                            hideErrorMsg = false,
                            enabled = true,
                        }) => {

    const {t} = useTranslation();
    const {isLoading, isError, data, error, isFetching, refetch} = useQuery(key, () => request.get(url, params), {
        onSuccess: () => {
        },
        onError: (data) => {
            if (!hideErrorMsg) {

            }
        },
        enabled
    });

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching,
        refetch
    }
};

export default useGetAllQuery;
