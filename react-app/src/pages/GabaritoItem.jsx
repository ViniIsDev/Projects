import React, {Component} from 'react';

class GabaritoItem extends Component {
    render() {
        const { item } = this.props.match.params;
        return (
            <div>
                <h1>Gabarito || ITEM </h1>
                <p>{item}</p>
            </div>
        )
    }
};

export default GabaritoItem;