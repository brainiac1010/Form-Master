import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'></section>

            <Cousin name={'arman'} ></Cousin>
            <Cousin name ={'hossain'}></Cousin>
        </div>
    );
};

export default Aunt;