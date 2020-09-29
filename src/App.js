import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import axios from "axios";

const App = () => {
    const [productData, productDataHandler] = useState(null)
    const getProductData = async () => {
        try {
            let base = await axios.get('base.json',{ crossDomain: true })
            productDataHandler(base.data)
        } catch (e) {
            console.log('e : ',e)
        }
    }
    useEffect(() => {getProductData().then(() => console.log())},[])
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={ '/' }>
                        <MainPage
                            data={ productData }
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;