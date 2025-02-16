import {Component} from 'react'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

class VaccinationByAge extends Component {
  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}K`
    }
    return number.toString()
  }

  render() {
    const {data} = this.props // Correctly receiving data as a prop

    return (
      <div className="vaccination-by-age-bg-container">
        <diV className="heading">
          <h1 className="vaccination-coverage-heading">Vaccination by Age</h1>
        </diV>
        <ResponsiveContainer width={1000} height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={data} // Using the prop passed from CowinDashboard
              dataKey="count"
              nameKey="age"
              startAngle={0}
              endAngle={360}
              outerRadius="70%"
              innerRadius="0%"
              fill="white"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="45-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationByAge
