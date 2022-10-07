$.ajax({
    type: "GET",
    url: csvRFQ,
    dataType: "text",
    success: function(data){
        let arr = [];
        let obj = {};
        csvRFQData = $.csv.toObjects(data);
        // console.log(csvRFQData);
        let splitData = data.split(/\r\n/);
        // console.log(splitData);
        let column = splitData[0].split(",");
        console.log(column);
        let first = splitData[1].split(",");
        console.log(first);
        
        $.map(column, function(val, key){
            // console.log(val);
            return obj[val] = 1;
        })
        console.log(obj);

        // $.each(splitData, function(key, val){
        //     val = val.split(',');
        //     // console.log(val);
        // })

    },
    error: function(err){
        alert("Failed!!");
        console.log("call Failed", err);
    }
});

$.ajax({
    type: "GET",
    url: csvRFQLog,
    dataType: "text",
    success: function(data){
        let result = {};
        // console.log(data.split(/\s+/,25));
        let splitData = data.split(/\r\n/);
        let column = splitData[0].split("\t");
        // console.log(column);
        // console.log(splitData[1].split("\t"));

        $.map(splitData, function(index, val){
            // console.log(index);

        })
    },
    error: function(err){
        alert("Failed!!");
        console.log("call Failed", err);
    }
});