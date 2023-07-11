import {
  BarChart,
  Tooltip,
  Bar,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props
  // const {vaccineDate, dose1, dose2} = vaccinationCoverage
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-details-container">
      <h1 className="cowin-sub-heading" style={{fontSize: '16px'}}>
        Vaccination Coverage
      </h1>
      <BarChart
        margin={{
          top: 5,
        }}
        width={1000}
        height={300}
        data={vaccinationCoverage}
      >
        <XAxis
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
          dataKey="vaccineDate"
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
          type="number"
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" fill="#5a8dee" />
        <Bar dataKey="dose2" fill="#f54394" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
