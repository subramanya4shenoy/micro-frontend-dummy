import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//mount function
const mount = (el) => {
    ReactDom.render(<App/>, el)
}

//if we are in dev mode and in isolation 
//load all imediately
if(process.env.NODE_ENV == 'development') {
    let devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot) {
        mount(devRoot);
    }
}

//if on prod we are running on container 
//mount the comp in container
export {mount}
