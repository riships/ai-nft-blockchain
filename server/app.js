import app from './index.js';


app.listen(5000, (err) => {
    if (!err) {
        console.log('Server is running on http://localhost:5000');
    }
})