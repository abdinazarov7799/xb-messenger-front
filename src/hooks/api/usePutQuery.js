import {useMutation, useQueryClient} from 'react-query'
import {request} from "../../services/api";
import {useTranslation} from "react-i18next";
import {get} from "lodash";

const putRequest = (url, attributes) => request.put(url, attributes);

const usePutQuery = ({hideSuccessToast = false, listKeyId = null}) => {
    const {t} = useTranslation();

        const queryClient = useQueryClient();

        const {mutate, isLoading, isError, error, isFetching} = useMutation(
            ({
                 url, attributes
             }) => putRequest(url, attributes),
            {
                onSuccess: (data) => {
                    if (!hideSuccessToast) {
                    }

                    if (listKeyId) {
                        queryClient.invalidateQueries(listKeyId)
                    }
                },
                onError: (data) => {
                }
            }
        );

        return {
            mutate,
            isLoading,
            isError,
            error,
            isFetching,
        }
    }
;

export default usePutQuery;
