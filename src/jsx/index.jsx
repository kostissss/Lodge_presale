import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index2 from './pages/home2';
import IndexC from './pages/countdownpage';
import ManualHeader from './element/ManualHeader.js';
import Snowfall from 'react-snowfall';
import soon from './pages/soon';
import BLACK from './pages/MyComponent';

class Router extends Component {
    render() {
        return (
            <>
               
                <BrowserRouter basename={'/react/'}>
                    
                    <div className="content-body">
                        <div className="container-fluid">
                            <div className="row">
                                <Switch>
                                
                                    <Route path='/' exact component={IndexC } />
                                    <Route path='/DiceCube' component={BLACK } />
                                    <Route path='/SnowRacing' component={soon} />
                                    <Route path='/SnowPresale' component={Index2} />
                                    <Route path='/SnowStaking' component={soon} />
                                    <Route path='/SnowRaffle' component={soon} />
                                    
                                    
                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>


            </>
        );
    }
}

export default Router;
