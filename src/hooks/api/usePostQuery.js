import {useMutation, useQueryClient} from 'react-query'
import {request} from "../../services/api";
import {useTranslation} from "react-i18next";

const postRequest = (url, attributes, config = {}) => request.post(url, attributes, config);

const  usePostQuery = ({hideSuccessToast = false, listKeyId = null}) => {
    const {t} = useTranslation();

        const queryClient = useQueryClient();

        const {mutate, isLoading, isError, error, isFetching} = useMutation(
            ({
                 url,
                 attributes,
                 config = {}
             }) => postRequest(url, attributes, config),
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

export default usePostQuery;
