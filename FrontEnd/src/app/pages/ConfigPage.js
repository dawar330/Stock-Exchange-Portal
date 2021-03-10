import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { useSubheader } from "../../_metronic/layout";

export const ConfigPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Configration");

  return (
    <>
      <Form>
        <Form.Group controlId="FinaceApiKey">
          <Form.Label>Finance API Key</Form.Label>
          <Form.Control type="string" placeholder="Api Key" />
          <Form.Text className="text-muted">
            We'll never share your Key with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="cvsreadfile">
          <Form.Label>Upload CSV File Name</Form.Label>
          <Form.Control type="string" placeholder="File Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
};
