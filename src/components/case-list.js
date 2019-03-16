import React from 'react';
import NgoCase from './ngo-case';
import LawyerCase from './lawyer-case';
import cookie from '../libs/cookie';

export default class CaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCases: props.allCases,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ allCases: newProps.allCases }, () => {console.log(this.state.allCases)});
}

  render() {
    const { allCases } = this.state;
    let caseComponent;
    if (cookie.getItem('userType') === 'ngo') {
      caseComponent = allCases.map((singleCase, i) => <NgoCase singleCase={allCases[i]} />);
    } else if (cookie.getItem('userType') === 'lawyer') {
      caseComponent = allCases.map((singleCase, i) => <LawyerCase singleCase={allCases[i]} />);
    } else if (cookie.getItem('userType') === 'coordinator') {
      caseComponent = allCases.map((singleCase, i) => <LawyerCase singleCase={allCases[i]} />);
    }

    return (
      <div>
        {caseComponent}
      </div>
    );
  }
}
