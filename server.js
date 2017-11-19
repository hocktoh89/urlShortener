import express from 'express';
import Get from './GET';

let app = express();
let port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello'));
app.get('/shortenedUrl/:longUrl?', Get.getShortenUrl);

app.listen(port, (err) => {
    if (err) {
        return console.log('Server fail at ', err);
    }

    console.log(`Server started on port localhost: ${port}`);
});

module.exports = app; 