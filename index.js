
convertToPlain = (html) => {

    if (!html){
        return "";
    }

    const strippedHtml = html.replace(/(\t)|(<[^>]+>)/g, "");

    return strippedHtml || "";
};

module.exports = {
    convertToPlain
};