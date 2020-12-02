const defaultOptions = {
    message: 'Default TMC Debug Message',
    groups: [],
    forceDebug: false,
    info: true
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

                if(typeof options.message === 'string'){
                    console.log('%c '+options.message, 'color: #ef3b2d')
                }else{
                    console.log(options.message)
                }

                if(options.info){
                    console.groupCollapsed('TMC Debug Info')
                    console.trace();
                    console.groupEnd();
                }

            }
        },
    };
};

export default Api;
