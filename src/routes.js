import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";
import LandingPage from "./components/landingPage/landingPage";
import "./assets/style/style.css"
import MarketStats from "./components/stats/marketStats";
const Routes = (props) => {
    const LayoutHeader = ({ children }) => {
        return (
            <div className="gradient">
                <Header />
                {children}
                <Footer />
            </div>
        );
    };

    return (
        <Router>
            <Switch>
                <Route exact path={"/LandingPage"} component={LandingPage} />
                <LayoutHeader>
                    <Route exact path={"/"} component={LandingPage} />
                    <Route exact path={"/stats/Trending"} component={MarketStats} />
                </LayoutHeader>
            </Switch>
        </Router>
    );
};
export default Routes;
