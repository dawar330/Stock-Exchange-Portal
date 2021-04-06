import React from "react";
import {useSubheader} from "../../_metronic/layout";
import EnhancedTable from "../../_metronic/layout/components/extras/EnhancedTable";

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Investments");

  return (<><EnhancedTable/></>);
};
