import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { useSubheader } from "../../_metronic/layout";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import firebase, { db } from "../../firebase/config";
const papa = require("papaparse");
export const ConfigPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Configration");
  const [csv, setcsv] = useState();
  async function ParseCsv() {
    if (csv) {
      console.log(csv);
      papa.parse(csv, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          console.log(results.data[results.data.length - 3].Portfolio);
          firebase
            .firestore()
            .collection("Users")
            .doc("2342341342")
            .update({
              TotalProfolio: `${
                results.data[results.data.length - 3].Portfolio
              }`,
              TotalQuantity: `${
                results.data[results.data.length - 3].Quantity
              }`,
            });
          for (let index = 0; index < results.data.length - 3; index++) {
            const element = results.data[index];
            firebase
              .firestore()
              .collection("Users")
              .doc("2342341342")
              .update({
                InvestedStocks: firebase.firestore.FieldValue.arrayUnion(
                  `${element.Symbol}`
                ),
              });
            db.collection("Users")
              .doc("2342341342")
              .collection("Reports")
              .doc(element.Symbol)

              .set({
                Protfolio: element.Portfolio,
                CostBasis: element.CostBasis,
                Quantity: element.Quantity,
              });
          }
        },
      });
    }
  }

  return (
    <Paper>
      <div style={{ padding: "35px" }}>
        <Form>
          <Form.Group controlId="FinaceApiKey">
            <Form.Label>Financial Modeling Api Key</Form.Label>
            <Form.Control
              type="string"
              placeholder="Api Key"
              value={process.env.REACT_APP_FINANTIAL_MODELING_KEY}
            />
            <Form.Text className="text-muted">
              We'll never share your Key with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Subscriptions Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your Email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="DiscordAPiKEy">
            <Form.Label>Discord Bot Api key</Form.Label>
            <Form.Control type="string" placeholder="Api Key" />
            <Form.Text className="text-muted">
              We'll never share your Key with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="cvsreadfile">
            <Form.Label>Upload CSV File Name</Form.Label>
            <Form.Control
              type="file"
              placeholder="File Name"
              onChange={(e) => {
                setcsv(e.target.files[0]);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => {
              ParseCsv();
            }}
          >
            Save
          </Button>
        </Form>
      </div>
    </Paper>
  );
};
