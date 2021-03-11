import React from 'react';
import './App.css';
import StudentTable from './components/student-table'
import data from './data/data.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        average: 'asc',
      }
    }

    this.groupByGrade = this.groupByGrade.bind(this)
  }

  groupByGrade(key){
    console.log(key)
    this.setState({
      data: data.sort((a, b) => a[key] - b[key])
    })
  }

  render() {
    return (
      <div className="page-container">
        <StudentTable
        data={this.state.data}
        groupByGrade={this.groupByGrade}
        />
      </div>
    )
  }
}

export default App


