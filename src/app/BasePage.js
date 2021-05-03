import React, { useState, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { ConfigPage } from "./pages/ConfigPage";
import ECommercePage from "./modules/ECommerce/pages/eCommercePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProspectStockesPage } from "./pages/ProspectStockesPage";
import { db } from "../firebase/config";
import TradingPlanPage from "./pages/TradingPlanPage";
import InvestmentPage from "./pages/InvestmentPage";

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  const [user, setuser] = useState({});

  React.useEffect(() => {
    db.collection("Users")
      .doc("2342341342")
      .onSnapshot(
        (doc) => {
          setuser({ ...doc.data(), ID: doc.id });
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
  }, []);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <Route
          path="/Investments"
          component={() => <InvestmentPage user={user} />}
        />
        <Route
          path="/ProspectStocks"
          component={() => <ProspectStockesPage user={user} />}
        />
        <Route
          path="/TradingPlan"
          component={() => <TradingPlanPage user={user} />}
        />

        <Route path="/Config" component={ConfigPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
