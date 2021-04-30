import React, { useState, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { ConfigPage } from "./pages/ConfigPage";
import ECommercePage from "./modules/ECommerce/pages/eCommercePage";
import { DashboardPage } from "./pages/DashboardPage";
import { InvestmentsPage } from "./pages/InvestmentsPage";
import { db } from "../firebase/config";

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  const [user, setuser] = useState({});

  React.useEffect(() => {
    db.collection("Users")
      .doc("2342341342")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          setuser({ ...doc.data(), ID: doc.id });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
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
          component={() => <InvestmentsPage user={user} />}
        />
        <Route path="/Interests" component={ECommercePage} />

        <Route path="/Config" component={ConfigPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
