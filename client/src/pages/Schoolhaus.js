import React from 'react';
import './Schoolhaus.css';

import * as SchoolhausReact from '../ilib/schoolhaus-react/main.js';


class Schoolhaus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MyTab: SchoolhausReact.Tabs.Core.Navigation()
        };
    }

    render() {
        return (
            <div className="Schoolhaus">
                {this.state.MyTab}
            </div>
        );
    }
}

export default Schoolhaus;