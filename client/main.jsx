// basic imports React UI, Meteor and render for meteor
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import routing packages, these must be placed in main as they require the top most level
import { Router, Route, browserHistory } from 'react-router';
// allows for material ui button presses
import injectTapEventPlugin from 'react-tap-event-plugin';
// import all pages for routing
import App from '../imports/ui/App.jsx';
import Services from '../imports/ui/Services.jsx';
import CaseStudy from '../imports/ui/CaseStudy.jsx';
import Contact from '../imports/ui/Contact.jsx';
import Lost from '../imports/ui/Lost.jsx';

// browserHistory play around
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

// this method merely calls the plugin
injectTapEventPlugin();

// starts the meteor app and loads the appropriate pages (routing), sends to main.html 'render-target'
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/services" component={Services} />
        <Route path="/caseStudy" component={CaseStudy} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Lost} />
    </Router>
  ), document.getElementById('render-target'));
});
