class Logger {
    log(pay_load, type){
        switch (type) {
            case 'HTTP':
                if(window.chrome){
                    console.groupCollapsed('%c' + "Endpoint:"+ pay_load.config.url , 'background:#4a4; color:#fff');
                    console.log(pay_load);
                }
        }
    }
}

export default Logger;