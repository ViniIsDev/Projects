import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
                <nav className='container__nav'>
                    <ul className='container__ulmenu'>
                        <li><Link to='./'>Home</Link></li>
                        <li><Link to='./agenda'>Agenda</Link></li>
                        <li><Link to='./live-lectures'>Aulas ao vivo</Link></li>
                        <li><Link to='./gabarito'>Gabaritos</Link></li>
                    </ul>
                </nav>
        )
    }
};

export default SideBar;