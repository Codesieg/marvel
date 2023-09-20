import React from 'react';

const Stats = ({statsArray}) => {    
    console.log(statsArray[0]['HP']);
    
    return (
        <div>
              <div className='flex mt-3 space-x-28'>
                <h4>PV</h4>
                <h4>{statsArray[0]['HP']}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-5.5 rounded-full" >{statsArray[0]['HP']}</div>
                </div>
            </div>  

            <div className="flex mt-3 space-x-28">
                <h4 className="flex w-1/3">Attaque</h4>
                <h4 className="flex w-1/3">{statsArray[0]['attack']}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-5.5 rounded-full" >{statsArray[0]['attack']}</div>
                </div>
            </div>  

            
        </div>
    );
};

export default Stats;