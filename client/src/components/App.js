import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
import Register from './register/model/ModelNew';
import Seminars from './seminars/Seminars';
import Hairstrokes from './seminars/Hair_strokes';
import Powdered from './seminars/Powdered';
import Lips from './seminars/Lips';
import Eyeliners from './seminars/Eyeliners';
import Areola from './seminars/Areola';
import Hairlines from './seminars/Hairlines';
import Others from './seminars/Others';

import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/seminars" component={Seminars}/>
            <Route exact path="/seminars/hair_strokes" component={Hairstrokes}/>
            <Route exact path="/seminars/powdered" component={Powdered}/>
            <Route exact path="/seminars/lips" component={Lips}/>
            <Route exact path="/seminars/eyeliners" component={Eyeliners}/>
            <Route exact path="/seminars/areola" component={Areola}/>
            <Route exact path="/seminars/hairlines" component={Hairlines}/>
            <Route exact path="/seminars/others" component={Others}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
