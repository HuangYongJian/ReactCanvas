/*
* @Author: Issac
* @Date:   2017-08-14 07:55:59
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-14 10:04:51
*/

'use strict';
require('../css/index.css');
import React    from 'react';
import ReactDOM from 'react-dom';
import Index    from './components/index';
import Again    from './components/again';
import Cartoon  from './components/cartoon';
import Color    from './components/color';
import Connect  from './components/connect';
import Controll from './components/controll';
import Corver   from './components/corver';
import Cut      from './components/cut';
import Font     from './components/font';
import Grad     from './components/grad';
import Light    from './components/light';
import Star     from './components/star';
import Time     from './components/time';
import {Route, BrowserRouter,Switch} from 'react-router-dom';

class Root extends React.Component{
	render(){
		return(
          <div class='root'>
           <BrowserRouter>
             <Switch>
			   <Route exact path="/" component={Index}></Route>
			   <Route path="/again" component={Again}></Route>
			   <Route path="/cartoon" component={Cartoon}></Route>
			   <Route path="/color" component={Color}></Route>
			   <Route path="/connect" component={Connect}></Route>
			   <Route path="/controll" component={Controll}></Route>
			   <Route path="/corver" component={Corver}></Route>
			   <Route path="/cut" component={Cut}></Route>
			   <Route path="/font" component={Font}></Route>
			   <Route path="/grad" component={Grad}></Route>
			   <Route path="/light" component={Light}></Route>
			   <Route path="/star" component={Star}></Route>
			   <Route path="/time" component={Time}></Route>
			</Switch>
		  </BrowserRouter>
          </div>
		)
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('mainContainer')
	)