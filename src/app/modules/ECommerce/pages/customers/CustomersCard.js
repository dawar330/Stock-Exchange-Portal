import React, { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { CustomersFilter } from "./customers-filter/CustomersFilter";
import { CustomersTable } from "./customers-table/CustomersTable";
import { CustomersGrouping } from "./customers-grouping/CustomersGrouping";
import { useCustomersUIContext } from "./CustomersUIContext";
import Seacrh from "../../../../../_metronic/layout/components/extras/Seacrh";

export function CustomersCard() {
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
    };
  }, [customersUIContext]);
  const [value, setvalue] = useState();

  return (
    <Card>
      <CardHeader title="Investments list">
        <CardHeaderToolbar>
          <Seacrh value={value} setvalue={setvalue} />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={customersUIProps.newCustomerButtonClick}
          >
            Add New Investment
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <CustomersFilter />
        {customersUIProps.ids.length > 0 && <CustomersGrouping />}
        <CustomersTable />
      </CardBody>
    </Card>
  );
}
