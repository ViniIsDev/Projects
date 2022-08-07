import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Agenda from '../pages/Agenda';
import Gabarito from '../pages/Gabarito';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';

class Content extends Component {
    render() {
        return (
            <main className='container__content'>
                Conteúdo aqui!
                <Route path='/live-lectures' component={ LiveLectures}/>
                <Route path='/' component={ Home } exact />
                <Route path='/agenda' component={ Agenda }/>
                <Route path='/gabarito' component={ Gabarito }/>
            </main>
        )
    }
};

export default Content;