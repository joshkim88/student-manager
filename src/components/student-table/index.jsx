import React from 'react'

export default function StudentTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>
            <button
              onClick={() => props.groupByGrade('grade')}
              >
              Grade
            </button>
          </th>
          <th>Scores</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(row => (
            <tr>
              <td>{row.name}</td>
              <td>{row.grade}</td>
              <td>math:{row.scores[0].value} english:{row.scores[1].value} science:{row.scores[2].value} social studies:{row.scores[2].value}</td>
              <td>{(row.scores[0].value + row.scores[1].value + row.scores[2].value + row.scores[2].value) / 4}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
