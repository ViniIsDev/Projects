import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (
                <nav className='container__nav'>
                    <ul className='container__ulmenu'>
                        <li><a href='./'>Home</a></li>
                        <li><a href='./agenda'>Agenda</a></li>
                        <li><a href='./live-lectures'>Aulas ao vivo</a></li>
                        <li><a href='./gabarito'>Gabaritos</a></li>
                    </ul>
                </nav>
        )
    }
};

export default SideBar;