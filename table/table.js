var data=[
    {
        date:"Jan 1,20X3",
        description:"Balance Forward",
    },
    {
        date:"Jan 2,20X3",
        description:"Collected Receivable",
        debit:10000,
    },
    {
        date:"Jan 3,20X3",
        description:"cash Sale",
        debit:5000,
    },
    {
        date:"Jan 5,20X3",
        description:"Paid Rent",
        credit:7000,
    },
    {
        date:"Jan 7,20X3",
        description:"Paid Salary",
        credit:3000,
    },
    {
        date:"Jan 8,20X3",
        description:"cash sale",
        debit:4000,
    },
    {
        date:"Jan 8,20X3",
        description:"Paid bills",
        debit:2000,
    },
    {
        date:"Jan 10,20X3",
        description:"Paid Tax",
        credit:1000,
    },
    {
        date:"Jan 12,20X3",
        description:"Collected Receivable ",
        debit:7000,
    },

];
//printing table in console

console.table(data);

// sorting by date
console.log("Data Sorted by Date ");
console.table(
    data.sort((a,b)=>{
        var date1=a.date;
        var date2=b.date;
        if(date1<date2){
            return -1;
        }
        if(date2>date1)
        {
            return 1;
        }
        if(date1==date2)
        {
            return 0;
        }
    })
);

// summation of debit and credit
var sum=0;

data.forEach((item)=>{
    if(item.credit!=undefined)
        sum+=item.credit;
    else if(item.debit!=undefined)
        sum+=item.debit;    
})
console.log("summation of credit and debit is :" +sum);

// find all data where debits greater than 5000
console.log(" Debit > 5000");
console.table(
    data.filter((item)=>{
        if(item.debit!=undefined && item.debit>5000){
            return item;
        }
        return false;
    })
);
 
// find credit less then 3000;

console.log(" credit < 3000");
console.table(
    data.filter((item)=>{
        if(item.credit!=undefined && item.credit<3000){
            return item;
        }
        return false;
    })
);





