// @flow
import * as React from 'react';
import './App.css'
import { SearchBar } from './SearchBar'

type Props = {
    
};

export function Hero(props: Props) {
    return (
        <div className="SearchBar-container">
      
      <SearchBar />
      <h1 className='TITLE'>Find The Best Educators in Algeria !</h1>
      <h1 className='SUBTITLE'>Our first-of-a-kind platform joins you with best institutes, schools and teachers in the country!</h1>
    </div>
    );
};