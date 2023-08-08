// ** React Imports
import { useEffect, useMemo } from 'react'

// ** Type Imports
import { Dates } from '../../type'

// ** Chart Imports
import ApexCharts from 'apexcharts'

interface Props {
  day: number
  dates: Dates
}

const BarChart = ({ day, dates }: Props) => {
  const categories = useMemo(() => {
    const dateArray = []
    let currentDate = dates.startDate

    while (
      currentDate.isBefore(dates.endDate.startOf('month')) ||
      currentDate.isSame(dates.endDate.startOf('month'))
    ) {
      dateArray.push(currentDate.format('YYYY.MM.DD'))
      currentDate = currentDate.add(1, 'month')
    }
    return dateArray
  }, [])

  useEffect(() => {
    const options = {
      series: [
        {
          name: '고객 현황',
          data: Array(categories.length).fill(50),
        },
      ],
      chart: {
        height: 500,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val
        },
        offsetY: -60,
        style: {
          fontSize: '15px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories,
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: number) {
            return val
          },
        },
      },
    }

    const chart = new ApexCharts(document.querySelector('#chart'), options)
    chart.render()

    return () => {
      chart.destroy()
    }
  }, [categories])

  return <div id="chart" />
}

export default BarChart
