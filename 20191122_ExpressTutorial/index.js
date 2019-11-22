const express = require('exrpess')

const app = express(); // express 객체 그 자체가 어플리케이션
app.listen(3000, () => {
    console.log("Server is running")
})