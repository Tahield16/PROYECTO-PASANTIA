
import { useStoresStore } from '../store/storesStore'
import { useEffect } from 'react'
import { ApiService } from '../services/api/ApiService'
import { useQuery } from '@tanstack/react-query'
export const useFetchStores=()=>{
    const {set}=useStoresStore();
    const query=useQuery({
        queryKey:["stores"],
        queryFn:ApiService.getStoreList
    })
    useEffect(()=>{
        console.log(query.data)
        if(query.data){
            set({stores:query.data.results})
        }
    },[query.data])
    return query;
}