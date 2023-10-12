import React, {createContext} from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import UserStore from './store/UserStore';
import ArticlrStore from './store/AerticleStore';

export const Context = craateContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Context.Provider value={{
        user:new UserStore(),
        article: new ArticlrStore()
    }}>
        <App/>
    </Context.Provider>
    </React.StrictMode>
);