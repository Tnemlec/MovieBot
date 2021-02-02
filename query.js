const http = require('https');
const axios = require('axios')

let obj = {
    messaging_type: "RESPONSE",
    recipient: {
        id: "3682350511826442"
    },
    message: {
        text: "hello, world!"
    }
}

http.request({
    url: 'https://graph.facebook.com/v9.0/me/messages?access_token=EAADgIrGf8JsBAE1WqyWJeCANqQyic7iqmcgxkmjgOIOogqzgsaWFLPLowbPof51OOk0eVgMiC9SZCmVFsGTNhT7WVdUyNkdcGPGPKgLsKyjulF6tufMzaeRT0DeqTc7GbuwVvoIj6JhhNOyHUnZBZA93WgPqoAXzRrSuzZBPWAZDZD', 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    json: JSON.stringify(obj)
}, (err, res, body)=>{
    console.log(err)
    console.log("done")
})

// axios.post('https://graph.facebook.com/v9.0/me/messages?access_token=EAADgIrGf8JsBAE1WqyWJeCANqQyic7iqmcgxkmjgOIOogqzgsaWFLPLowbPof51OOk0eVgMiC9SZCmVFsGTNhT7WVdUyNkdcGPGPKgLsKyjulF6tufMzaeRT0DeqTc7GbuwVvoIj6JhhNOyHUnZBZA93WgPqoAXzRrSuzZBPWAZDZD', obj).then(response => {
//     console.log(response)
// }).catch(err => {
//     console.log(err)
// })