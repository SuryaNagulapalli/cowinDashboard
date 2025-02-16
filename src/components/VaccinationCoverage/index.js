import {Component} from 'react'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from 'recharts'
import './index.css'

class VaccinationCoverage extends Component {
  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}K`
    }
    return number.toString()
  }

  render() {
    const {data} = this.props

    return (
      <div className="vaccination-coverage-bg-container">
        <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
        <ResponsiveContainer width={1000} height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="vaccineDate"
              tick={{stroke: '#6c757d', strokeWidth: 1}}
            />
            <YAxis
              tickFormatter={this.DataFormatter}
              tick={{stroke: '#6c757d', strokeWidth: 0}}
            />
            <Legend />
            <Bar
              name="Dose 1"
              dataKey="dose1"
              fill="#5a8dee"
              barSize="20%"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              name="Dose 2"
              dataKey="dose2"
              fill="#f54394"
              barSize="20%"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationCoverage
