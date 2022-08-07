import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Agenda from '../pages/Agenda';
import Gabarito from '../pages/Gabarito';
import GabaritoItem from '../pages/GabaritoItem';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';

class Content extends Component {
    render() {
        return (
            <main className='container__content'>
                <Switch>
                <Route path='/live-lectures' component={ LiveLectures}/>
                <Route path='/' component={ Home } exact />
                <Route path='/agenda' component={ Agenda }/>
                <Route path='/gabarito' component={ Gabarito } exact />
                <Route path='/gabarito/:item' component={ GabaritoItem }/>
                </Switch>
            </main>
        )
    }
};

export default Content;