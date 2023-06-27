import React, { useState } from 'react';
// import { ReactComponent as Youtube } from '../../../assets/Images/Icons/Youtube.svg';
import { Link, useLocation } from 'react-router-dom';


const StatsFilter = () => {
    const location = useLocation();

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className='px-5'>
            <div className="d-flex justify-content-between">
                <div className="itemSpacing stats">
                    <Link className={location.pathname === '/stats/Trending' ? 'active' : ''} >Trending</Link>
                    <Link className={location.pathname === '/Top Volume' ? 'active' : ''}>Top Volume</Link>
                    <Link className={location.pathname === '/blogs' ? 'active' : ''}>Newly Listed</Link>
                </div>
                <div className="tab-container">
                    <div
                        className={`tab ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}                    >
                        1h
                    </div>
                    <div
                        className={`tab ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}                    >
                        6h
                    </div>
                    <div
                        className={`tab ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleTabClick(3)}                    >
                        24h
                    </div>
                    <div
                        className={`tab ${activeTab === 4 ? 'active' : ''}`}
                        onClick={() => handleTabClick(4)}                    >
                        7d
                    </div>
                    <div
                        className={`tab ${activeTab === 5 ? 'active' : ''}`}
                        onClick={() => handleTabClick(5)}                    >
                        More
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StatsFilter;