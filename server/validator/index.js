module.exports = (req) => {
    let msg = "";
    const httpsRegex = /(http|https):\/\//g;
    if(req.topic == '-1') {
        msg = "Preencha um tópico válido!";
    } else if(!httpsRegex.test(req.link)) {
        msg = "Preencha um link válido!";
    }
    return msg;
}