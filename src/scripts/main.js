import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

function DemoComponentHeader(props) {
    return (
        <div className="page-header">
            <h1>Demo kit</h1>
        </div>
    );
}

function DemoComponent(props){
    return (
    <div>
        <DemoComponentHeader />
        <div className="container">
            <p>A simple React Webpack 2.0 babel kit with bootstrap framework</p>
        </div>
    </div>
    );
}

ReactDOM.render(<DemoComponent/>, document.getElementById('react-container'));