import React from 'react';
import LoaderSync from '../../assets/loader.gif'

const Loader = props =>(
    <div>
        <img 
            style={{width: 75, height: 75}}
            alt="Loader icon" 
            src={LoaderSync} />
    </div>
)

export default Loader;