$.ajax({
  type: "GET",
  url: csvRFQ,
  dataType: "text",
  success: function (csv) {
    let lines = csv.split(/\r\n/);
    // 移除空字串
    let linesFilter = lines.filter(item => {
      return item.trim();
    })
    let headers = linesFilter[0].split(",");
    // console.log(headers);

    linesFilter.forEach((item, i) => {
      if(i == 0){return}; // 第一筆 return
      let obj = {};
      let linesData  = item.split(",");
      // console.log(linesData);
      
      headers.forEach((header, key) => {
        obj[header] = linesData[key];
      })
      csvRFQData.push(obj);
    });
    // console.log(csvRFQData);

    // csvRFQData = $.map(lines, function (val1, key) {
    //   let val2 = val1.split(",");

    //   return {
    //     RFQ_MASTER_ID: val2[0],
    //     PRODUCT_FAMILY: val2[1],
    //     RECEIVE_DATE: val2[2],
    //     RFQ_STATUS: val2[3],
    //     EST_PROD_REVENUE: val2[4],
    //     EST_SALES_QTY: val2[5],
    //     EST_PROD_COST: val2[6],
    //     DB_YEAR: val2[7],
    //     DB_DATE: val2[8],
    //     SI_DATE: val2[9],
    //     PV_DATE: val2[10],
    //     RTM_DATE: val2[11],
    //     FCS_DATE: val2[12],
    //     LIFE_CYCLE: val2[13],
    //     END_YEAR: val2[14],
    //     END_DATE: val2[15],
    //     LOST_REASON_CODE: val2[16],
    //     LOST_REASON_DESC: val2[17],
    //     YLY_SHIPMENT_ONLY: val2[18],
    //     REMARK: val2[19],
    //     EDITOR: val2[20],
    //     CDT: val2[21],
    //     UDT: val2[22],
    //   };

    //   // let obj2 = { Family: val2[1] };
    //   // return obj2;
    // });
    // csvRFQData.splice(0, 1);
    // csvRFQData.splice(93, 1);
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
  success: function (csv) {
    let lines = csv.split(/\r\n/);
    let headers = lines[0].split("\t");
    // console.log(headers);

    lines.forEach((item, i) => {
      if(i == 0){return}; // 第一筆 return
      let obj = {};
      let linesData = item.split("\t");
      console.log(linesData);

      headers.forEach((header, key) => {
        obj[header] = linesData[key];
      })
      csvRFQLogData.push(obj);
    });
    // console.log(csvRFQLogData);

    // csvRFQLogData = $.map(lines, function (val, i) {
    //   let val2 = val.split("\t");
    //   // console.log(val2);
    //   return {ID : val2[0],
    //           RFQ_MASTER_ID : val2[1],
    //           ACTION_NAME : val2[2],
    //           PRODUCT_FAMILY : val2[3],
    //           OLD_PRODUCT_FAMILY : val2[4],
    //           RECEIVE_DATE : val2[5],
    //           RFQ_STATUS : val2[6],
    //           EST_PROD_REVENUE : val2[7],
    //           EST_SALES_QTY : val2[8],
    //           EST_PROD_COST : val2[9],
    //           DB_YEAR : val2[10],
    //           DB_DATE : val2[11],
    //           SI_DATE : val2[12],
    //           PV_DATE : val2[13],
    //           RTM_DATE : val2[14],
    //           FCS_DATE : val2[15],
    //           LIFE_CYCLE : val2[16],
    //           END_YEAR : val2[17],
    //           END_DATE : val2[18],
    //           LOST_REASON_CODE : val2[19],
    //           LOST_REASON_DESC : val2[20],
    //           YLY_SHIPMENT_ONLY : val2[21],
    //           REMARK : val2[22],
    //           EDITOR : val2[23],
    //           CDT : val2[24],
    //         }
    // });
    // csvRFQLogData.splice(0, 1);
    // console.log(csvRFQLogData);
  },
  error: function (err) {
    alert("Failed!!");
    console.log("call Failed", err);
  },
});

