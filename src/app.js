import React from "react";
import { hot } from 'react-hot-loader/root';

const App = props => {
    return(
        <div>
            Hello I'm {props.name}
        </div>
    )
}

export default hot(App);