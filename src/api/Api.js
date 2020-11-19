const defaultOptions = {
    message: 'Default TMC Debug Message',
    groups: [],
    forceDebug: false,
};

const Api = (Vue, globalOptions = {}) => {
    return {
        log (userOptions) {

            if (typeof userOptions === 'string') {
                userOptions = {
                    message: userOptions,
                };
            }
            let options = {...defaultOptions, ...userOptions};

            if (globalOptions.globalDebug || globalOptions.debugGroups.some(debugGroup => options.groups.includes(debugGroup)) || options.forceShow){
                console.log(options.message)
                console.groupCollapsed('TMC Debug Info')
                console.trace();
                console.groupEnd();
            }
        },
    };
};

export default Api;
