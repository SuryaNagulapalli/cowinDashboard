import {Component} from 'react'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

class VaccinationByGender extends Component {
  render() {
    const {data} = this.props // Receiving data as a prop

    return (
      <div className="vaccination-by-gender-bg-container">
        <h1 className="vaccination-coverage-heading">Vaccination by Gender</h1>
        <ResponsiveContainer width={1000} height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={data} // Using the prop passed from CowinDashboard
              dataKey="count"
              nameKey="gender"
              startAngle={0}
              endAngle={180}
              outerRadius="70%"
              innerRadius="40%"
              fill="white"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationByGender
