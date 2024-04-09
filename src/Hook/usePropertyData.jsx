import { useEffect, useState } from 'react';

const usePropertyData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/data.json');
            const data = await res.json();
            setData(data);
        }
        fetchData()
    },[])
    console.log(data);
    return {data}
};

export default usePropertyData;