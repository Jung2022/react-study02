import React from 'react';

class Detail extends React.Component {
  render() {
    const { location } = this.props;
    console.log(this.props);
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
}

export default Detail;
