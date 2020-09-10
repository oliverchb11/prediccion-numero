const express = require('express');
const app = express();
require('../src/estado/estado')

app.set('puerto', 3000);



app.listen(app.get('puerto'), () => {
    console.log('Servidor en el puerto', app.get('puerto'));
})