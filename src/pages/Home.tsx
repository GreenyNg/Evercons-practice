import React, { useEffect, useState, useContext } from "react"

const Home = ({ }) => {

    useEffect(() => {

    }, [])
    
    return (
        <>
            <section style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <span className="ev ev-alert fs-40" style={{ color: '#000fff' }}></span>
                <span className="ev ev-activity fs-40"></span>
                <span className="ev ev-arrow-down-circle fs-40"></span>

            </section>
        </>
    )
};

export default Home;
