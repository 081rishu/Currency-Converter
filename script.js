document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#currency-converter").addEventListener("submit", (event)=>{
        event.preventDefault();

        const {target: {from, to, amount}} = event;


        var headers = new Headers();
        headers.append("apikey", "7vAlXXCKYAbgRR5PzK3LKcLBW6PwwQwD");

        const requestOptions = {
            method:"Get",
            headers,
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        .then(response => response.json())
        .then(data => {

            // {
            //     "success": true,
            //     "query": {
            //         "from": "USD",
            //         "to": "INR",
            //         "amount": 4
            //     },
            //     "info": {
            //         "timestamp": 1690004043,
            //         "rate": 81.990504
            //     },
            //     "date": "2023-07-22",
            //     "result": 327.962016
            // }
            
            let {info, date, result, query: {to} } = data;
            document.querySelector(".result").textContent = `As per exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)}` ;
        })
        .catch(error => console.log(error));    

    });
})