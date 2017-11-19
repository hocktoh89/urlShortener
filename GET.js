import fetch from 'node-fetch';

const access_token = 'f104c6ae7ba6cc03814cac9fa1705569a1b82b72';
const longUrl = 'https://www.khanacademy.org/computing/computer-science/informationtheory/info-theory/v/language-of-coins-2-8-proto-writing';

exports.getShortenUrl = async function(req, res) {
    let result = {};
    await fetch(`https://api-ssl.bitly.com/v3/shorten?access_token=${access_token}&longUrl=${longUrl}`)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
       result = json;
    });

    return result.data.url;
    // return result.data.url;
};