import React from 'react';

import './styles.css'

const seasonConfig = {
    summer:{
        text: "Let's hit the beach",
        iconName: 'sun',
    },
    winter: {
        text: "Burr, it's chilly",
        iconName: 'snowflake',
    },
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9){
        //northern hemisphere
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        //southern hemisphere
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = ({ latitude }) => {
    const season = getSeason(latitude, new Date().getMonth());

    const { text, iconName } = seasonConfig[season];
        
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${ iconName } icon`}/>
            <h1>{ text }</h1>
            <i className={`icon-right massive ${ iconName } icon `}/>
        </div>
    );
}

export default SeasonDisplay;