
import { useContext } from 'react';
import { ApiContext } from './../../ContextApiData/ContextApiData';
import Banner from './../../components/Banner/Banner';


const Home = () => {
    const {data} = useContext(ApiContext)
    console.log(data);

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;