import Api from "../src/api/Api";

const defaultOptions = {
    globalDebug : false,
    debugGroups: [],
}

const Plugin = (Vue, userOptions = {}) => {
    let options = {...defaultOptions, ...userOptions}
    let methods = Api(Vue, options)
    Vue.$snitch = methods;
    Vue.prototype.$snitch = methods;
}

export default Plugin;
