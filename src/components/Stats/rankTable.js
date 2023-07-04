import React from "react";
import { ReactComponent as CollectionImg } from '../../assets/Images/Img/collectionProfile.svg';
import { ReactComponent as Eth } from '../../assets/Images/currencyIcon/ethereum.svg';
import { ReactComponent as Favorite } from '../../assets/Images/Icons/favorite.svg';
import { ReactComponent as Eye } from '../../assets/Images/Icons/eye.svg';
import { ReactComponent as Down } from '../../assets/Images/Icons/arrow-down-white.svg';
import { DummyRank } from "./DummyRes";
import "./stats.css"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TinyChart = () => {
    const chartOptions = {
        chart: {
            type: 'line',
            width: 100, // Set the desired width of the chart
            height: 100, // Set the desired height of the chart
        },
        title: {
            text: null,
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false,
        },
        series: [
            {
                showInLegend: false,
                data: [5, 2, 9,3],
            },
        ],
        credits: {
            enabled: false
        },
    };

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const RankTable = () => {

    return (
        <div className="table-back" >
            <div className="table-head">
                <span>Rank #</span>
                <span >Collection</span>
                <span ></span>
                <div className="center gap-3">
                    <span >Volumn</span>
                    <Down />
                </div>
                <span>% Change</span>
                <span>Floor Price</span>
                <span>Owners</span>
                <span>Graph</span>
                <span>NFTs</span>
                <span ></span>
            </div>
            {DummyRank.map((val) => {
                return (
                    <div className="table-body">
                        <span className="rank">{val?.Rank}</span>
                        <span className="collection-Name">
                            <div className="center gap-3">
                                <CollectionImg className="coll-Img" />
                                <span>{val?.Collection}</span>
                            </div>
                        </span>
                        <span className="volumn">
                            <Eth className="eth-Icon" />
                            {val?.volumn}</span>
                        <span className="change">{val?.Change}</span>
                        <span className="floor-price">{val?.FloorPrice}</span>
                        <span className="owner">{val?.Owners}</span>
                        <div>
                            <TinyChart />
                        </div>
                        <span className="NFTs-count">{val?.NFTs}</span>
                        <div className="gap-3 d-flex">
                            <Favorite />
                            <Eye />
                        </div>
                    </div>
                )
            })
            }
        </div >
    );
}
export default RankTable;