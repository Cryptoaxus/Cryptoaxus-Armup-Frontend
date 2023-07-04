import React, { useState } from "react";
import StatsFilter from "./statsFilter";
import StatsSideFilter from "./statsSideFilter";
import RankTable from "./rankTable";
import Pagination from "./pagination";
import { Form } from "react-bootstrap";
import StatsHead from "./statsHead";

const MarketStats = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => setIsChecked(!isChecked);

    return (
        <div className="p-lg-5">
            <StatsHead />
            <StatsFilter />
            <div className="row p-5">
                <div className="col-3">
                    <StatsSideFilter />
                </div>
                <div className="col-9">
                    <RankTable />
                    <div className="pt-4 d-flex justify-content-between">
                        <div className="gap-3 d-flex align-items-center">
                            <Form.Check
                                type="switch"
                                id="toggle-switch"
                                label=""
                                checked={isChecked}
                                className="toogle"
                                onChange={handleToggle}
                            />
                            <span className="showendles">Show endless scroll</span>
                        </div>
                        <div>
                            {isChecked == false ? <Pagination /> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MarketStats;