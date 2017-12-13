/**
 * Created by Joshua on 12/12/2017.
 */
import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';

const LoadingAnimation = () => {
    return(
        <RefreshIndicator
            size={100} left={0} top={-50} status="loading" style={{marginLeft: '0', marginTop: '10vh', display: 'inline-block',
            position: 'relative'}}
        />
    );
};

export default LoadingAnimation;