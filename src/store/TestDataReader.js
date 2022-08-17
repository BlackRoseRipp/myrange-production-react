import React, { useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';

const TestDataReader = (file) => {
    const [xlsxData, setXlsxData] = useState([])
    const [resData, setResData] = useState([])

    const readExcelFile = () => {        
        ExcelRenderer(file, (err, resp) => {
            if (err) {
                console.log(err)
            } else {
                const newData = parseData(formatData(cleanData(resp.rows)))
                //console.log(newData)
                if (checkPostcode(newData)) {
                    setXlsxData(newData);
                } else {
                    console.log("Invalid Postal Codes from File")
                    setAlertMessage("Check your postal codes. At least one of them is invlaid.")
                    setShowAlertBox(true)
                }
            }
        })
    }

    const cleanData = (data) => {
        let res = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].length > 3) {
            res.push(data[i])
          }
        }
        return res
    }

    const formatData = (data) => {
        const dates = data[0]
        const runDates = data[1]
        const accessionNumbers = data[2]
        const vanityRows = ['CMP', 'HEMOTOLOGY', 'CHEMISTRY', 'LIPID PANEL W/ CLDL', 'SPECIAL CHEMISTRY', 'ENDOCRINOLOGY', 'Tumor Marker', '*****']
        const otherRows = data.slice(3)
        const tests = []

        let res = {}

        for (let i = 0; i < otherRows.length; i++) {
            if (vanityRows.every(val => val !== otherRows[i][0])){
                tests.push(otherRows[i])
            }
        }

        for (let i = 0; i < accessionNumbers.length; i++){

        }
    }

    const isValidDate = (date) => {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
            return false
        }

        const parts = date.split("/")
        const day = parseInt(date[1])
        const month = parseInt(date[0])
        const year = parseInt(date[2])

        if ( year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false
        }

        const monthLens = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
            monthLens[1] = 29
        }
        
        return day > 0 && day <= monthLens[month-1]
    }
}

export default TestDataReader
