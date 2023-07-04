import { React, useState } from "react";
// import { ReactComponent as Youtube } from '../../../assets/Images/Icons/Youtube.svg';
import { ReactComponent as Down } from '../../assets/Images/Icons/arrow-down.svg';
import { ReactComponent as Up } from '../../assets/Images/Icons/arrow-up.svg'
import Select from "react-select";

const StatsSideFilter = () => {
    const [showNetwork, setNetwork] = useState(false);
    const Collection = [
        { value: "eth", label: "Test Collection" },
        { value: "Solana", label: "Solana" },
        { value: "Ethereum", label: "Ethereum" },
        { value: "Polygon", label: "Polygon" },
        { value: "Goreli Test", label: "Goreli Test" }
    ]
    return (
        <div>
            <button className='filterOptBtn p-4'>
                {showNetwork === false ?
                    <div onClick={() => { setNetwork(!showNetwork) }}
                        className='d-flex justify-content-between'>
                        <div className="btntxt">Network</div>
                        <div><Up /></div>
                    </div>
                    :
                    <div onClick={() => { setNetwork(!showNetwork) }}
                        className='d-flex justify-content-between'>
                        <div className="btntxt">Network</div>
                        <div><Down /></div>
                    </div>
                }
                {showNetwork &&
                    <div className="pt-4">
                        <Select
                            defaultValue={{ label: "Ethereum", value: "Ethereum" }}
                            className="collection-Select"
                            options={Collection}
                        />
                    </div>
                }
            </button>
        </div>
    );
}
export default StatsSideFilter;