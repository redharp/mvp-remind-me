import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Container} from 'semantic-ui-react';
import EndingSoon from './components/EndingSoon';
import ReminderForm from './components/ReminderForm';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
      moment: moment()
    };
    this.getTasksEndingSoon();
  }

  getTasksEndingSoon() {
    return fetch('/v1/reminders').then((data) => {
      data
        .json()
        .then((data) => {
          this.setState({reminders: data});
        });
    }).catch(error => error);
  }

  render() {
    return (
      <div>

        <Header size="huge">Remind-Me!</Header>
        <ReminderForm/>

        <EndingSoon reminders={this.state.reminders}/>

      </div>
    );
  }
}

export default ReactDOM.render(
  <App/>, document.getElementById('remind-me'));
