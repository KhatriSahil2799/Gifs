import { useInfiniteQuery } from "react-query"
import kyClient from "../utils/kyClient"

const useGifs = (searchText?: string) => {

    const fetchPage = async (pageParam = 0) => {
        const res = await kyClient.get(`gifs/${searchText ? "search" : 'trending'}?api_key=adeQv8rjsmzUf4LPXYCCYT22g0ySwBMi&offset=${pageParam}&limit=5${searchText ? '&q=' + searchText : ''}`, {
        })
        return await res.json()
    }
    
    return useInfiniteQuery({
        queryKey: ["trendyGifs", searchText],
        queryFn: ({ pageParam = 0 }) => fetchPage(pageParam),
        getNextPageParam: (lastPage) => {
            const pagination = lastPage?.pagination
            const newOffset = pagination?.offset + pagination?.count
            if (newOffset > pagination?.total_count) {
                return undefined
            }
            return pagination?.offset + pagination?.count
        },
    })
}

export default useGifs