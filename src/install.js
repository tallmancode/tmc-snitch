import Api from "../src/api/Api";

const defaultOptions = {
    globalDebug : false,
    debugGroups: [],
}

const TmcSntich = {
    install(Vue, userOptions = {}) {
        let options = {...defaultOptions, ...userOptions}
        let methods = Api(Vue, options)
        Vue.$snitch = methods;
        Vue.prototype.$snitch = methods;
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TmcSntich);
}

export default TmcSntich;
