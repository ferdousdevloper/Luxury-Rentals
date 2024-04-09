
import { useContext } from 'react';
import { ApiContext } from './../../ContextApiData/ContextApiData';
import Banner from './../../components/Banner/Banner';
import OurServices from '../../components/OurServices/OurServices';
import Cards from '../../components/Cards/Cards';


const Home = () => {
    const {data} = useContext(ApiContext)
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Cards></Cards>

        </div>
    );
};

export default Home;