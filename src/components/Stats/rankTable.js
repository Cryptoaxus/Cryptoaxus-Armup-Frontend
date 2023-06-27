import React from "react";
import { ReactComponent as CollectionImg } from '../../assets/Images/Img/collectionProfile.svg';
import { ReactComponent as Eth } from '../../assets/Images/currencyIcon/ethereum-1.svg';
import { DummyRank } from "./DummyRes";
import "./stats.css"
const RankTable = () => {
    return (
        <div className="table-Body">
            <div className=" table-responsive-md">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Rank #</th>
                            <th scope="col">Collection</th>
                            <th scope="col">Volumn</th>
                            <th scope="col">% Change</th>
                            <th scope="col">Floor Price</th>
                            <th scope="col">Owners</th>
                            <th scope="col">Graph</th>
                            <th scope="col">NFTs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DummyRank.map((val) => {
                            return (
                                <tr>
                                    <th scope="row">{val?.Rank}</th>
                                    <td>
                                        <div className="center">
                                            <CollectionImg className="coll-Img" />
                                            <span>{val?.Collection}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <Eth className="eth-Icon" />
                                        {val?.volumn}</td>
                                    <td>{val?.Change}</td>
                                    <td>{val?.FloorPrice}</td>
                                    <td>{val?.Owners}</td>
                                    <td>{val?.Graph}</td>
                                    <td>{val?.NFTs}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default RankTable;