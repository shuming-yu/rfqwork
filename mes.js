$.ajax({
  type: "GET",
  url: csvRFQ,
  dataType: "text",
  success: function (data) {
    let splitData = data.split(/\r\n/);
    // console.log(splitData);

    let column = splitData[0].split(",");
    console.log(column);
    csvRFQData = $.map(splitData, function (val1, key) {
      let val2 = val1.split(",");
      console.log(val2);
      return {
        RFQ_MASTER_ID: val2[0],
        PRODUCT_FAMILY: val2[1],
        RECEIVE_DATE: val2[2],
        RFQ_STATUS: val2[3],
        EST_PROD_REVENUE: val2[4],
        EST_SALES_QTY: val2[5],
        EST_PROD_COST: val2[6],
        DB_YEAR: val2[7],
        DB_DATE: val2[8],
        SI_DATE: val2[9],
        PV_DATE: val2[10],
        RTM_DATE: val2[11],
        FCS_DATE: val2[12],
        LIFE_CYCLE: val2[13],
        END_YEAR: val2[14],
        END_DATE: val2[15],
        LOST_REASON_CODE: val2[16],
        LOST_REASON_DESC: val2[17],
        YLY_SHIPMENT_ONLY: val2[18],
        REMARK: val2[19],
        EDITOR: val2[20],
        CDT: val2[21],
        UDT: val2[22],
      };

      // let obj2 = { Family: val2[1] };
      // return obj2;
    });
    csvRFQData.splice(0, 1);
    csvRFQData.splice(93, 1);
    // console.log(csvRFQData);
  },
  error: function (err) {
    alert("Failed!!");
    console.log("call Failed", err);
  },
});


$.ajax({
  type: "GET",
  url: csvRFQLog,
  dataType: "text",
  success: function (data) {
    let splitData = data.split(/\r\n/);
    let column = splitData[0].split("\t");
    // console.log(column);

    csvRFQLogData = $.map(splitData, function (val, i) {
      let val2 = val.split("\t");
      // console.log(val2);
      return {ID : val2[0],
              RFQ_MASTER_ID : val2[1],
              ACTION_NAME : val2[2],
              PRODUCT_FAMILY : val2[3],
              OLD_PRODUCT_FAMILY : val2[4],
              RECEIVE_DATE : val2[5],
              RFQ_STATUS : val2[6],
              EST_PROD_REVENUE : val2[7],
              EST_SALES_QTY : val2[8],
              EST_PROD_COST : val2[9],
              DB_YEAR : val2[10],
              DB_DATE : val2[11],
              SI_DATE : val2[12],
              PV_DATE : val2[13],
              RTM_DATE : val2[14],
              FCS_DATE : val2[15],
              LIFE_CYCLE : val2[16],
              END_YEAR : val2[17],
              END_DATE : val2[18],
              LOST_REASON_CODE : val2[19],
              LOST_REASON_DESC : val2[20],
              YLY_SHIPMENT_ONLY : val2[21],
              REMARK : val2[22],
              EDITOR : val2[23],
              CDT : val2[24],
            }
    });
    csvRFQLogData.splice(0, 1);
    // console.log(csvRFQLogData);
  },
  error: function (err) {
    alert("Failed!!");
    console.log("call Failed", err);
  },
});
