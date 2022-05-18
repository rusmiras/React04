import React, { Component } from 'react';

class App extends Component{
  
  setMyStorage() {
    document.cookie = 'Year = 2021';
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  
  getMyStorage() {
    const myCookieData = document.cookie.split(';').find(row=>row.startsWith('Year=')).split('=')[1];
    let myLocalStorageData = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
    console.log(myLocalStorageData);
    console.log(mySessionStorageData);
    console.log(myCookieData);
  }
  
  render() {
    
    return (
      <div className='App'>
        <button onClick={() => this.setMyStorage()}>Set storage</button>
        <button onClick={()=>this.getMyStorage()}>Get storage</button>
      </div>
    )
  }
}

export default App;
