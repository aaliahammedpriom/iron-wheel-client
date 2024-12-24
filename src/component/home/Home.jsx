import React from 'react';
import Banner from '../home/Banner'
import PopularService from './PopularService';
import ReviewCards from './ReviewCards';
import HeavyDutyTrivia from './HeavyDutyTrivia';

const Home = () => {
    
    return (
        <div >
            <Banner></Banner>
            <PopularService></PopularService>
            <ReviewCards></ReviewCards>
            <HeavyDutyTrivia></HeavyDutyTrivia>
        </div>
    );
};

export default Home;