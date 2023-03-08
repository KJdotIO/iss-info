import React from "react";
import '../src/media/iss-black.jpg'

import iss from '../src/media/iss-black.jpg'

const Card = ({name, latitude, longitude, velocity, visibility, date, units, altitude}) => {
    
    return(
        <>
        <div className="
         flex
         justify-center
         items-center
         bg-[#292929]
         w-[600px]
         p-[30px]
          rounded-[20px]
          max-w-[90%]
          box-border
        ">
            <div
            >
                <div>
                    <img
                    alt="iss"
                    src={iss}
                    style={{
                        maxWidth: '100%',
                        borderRadius: '20px'
                    }}
                    />
                </div>

                <hr className="my-[30px] opacity-50" />

                <div
                className=" text-[1rem]"
                >
                    <div className=" opacity-50 text-2xl font-extrabold flex justify-between">
                    <h1>Satalie:</h1>
                    <h1>{name}</h1>

                    </div>

                    <div className="font-semibold">

                        <div className="flex justify-between">
                            <p>Latitude:</p>
                            <p>{latitude}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Longitude:</p>
                            <p>{longitude}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Visibility:</p>
                            <p>{visibility}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Current date:</p>
                            <p>{date}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>MPH:</p>
                            <p>{velocity}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Units:</p>
                            <p>{units}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Card;