import React from 'react';
import PropTypes from 'prop-types';

const User = (props: any) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

function App() {
  const profiles = [{ name: 'Taro', age: 10 }, { name: 'Hanako', age: 20 }, { name: 'No Age' }];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
}

export default App;
