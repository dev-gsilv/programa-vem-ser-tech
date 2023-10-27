function getAboutUsLink(idioma) {
    const linksSobreNos = {
        pt: '/sobre-nos',
        en: '/about-us',
        fr: '/a-propos-de-nous',
    };

    if (linksSobreNos.hasOwnProperty(idioma)) {
        return linksSobreNos[idioma];
    } else {
        return linksSobreNos['en'];
    }
};

console.log(getAboutUsLink("pt"));
