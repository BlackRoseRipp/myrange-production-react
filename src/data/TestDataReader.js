import React, { useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';

const TestDataReader = (file) => {
    const [xlsxData, setXlsxData] = useState([])
    const [resData, setResData] = useState([])
    const [testData, setTestData] = useState([])

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

        for (let i = 1; i < accessionNumbers.length; i++){
            let temp = dates[i].split(' ')
            if (!(isValidDate(temp[0]) && isValidDate(runDates[i]))){
                console.log('Invalid Data at column ' + (i+2))
                return
            }
            if (accessionNumbers[i].length > 1){
                res[accessionNumbers[i]]['date'] = temp[0]
                res[accessionNumbers[i]]['type'] = temp[1]
                res[accessionNumbers[i]]['runDate'] = runDates[i]
                for (let j = 0; j < tests.length; j++) {
                    res[accessionNumbers[i]][tests[j][0]] = tests[j][i]
                }
            }
        }
    }

    const isValidDate = (date) => {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
            return false
        }

        const parts = date.split("/")
        const day = parseInt(parts[1])
        const month = parseInt(parts[0])
        const year = parseInt(parts[2])

        if ( year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false
        }

        const monthLens = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
            monthLens[1] = 29
        }
        
        return day > 0 && day <= monthLens[month-1]
    }

    const compareDates = (lesserDate, greaterDate) => {
        const parts1 = lesserDate.split("/").map(str => parseInt(str))
        const parts2 = greaterDate.split("/").map(str => parseInt(str))
        if (parts1[2] > parts2[2]){
            return false
        } else if (parts1[2] < parts2[2]){
            return true
        } else {
            if (parts1[0] > parts2[0]){
                return false
            } else if (parts1[0] < parts2[0]){
                return true
            } else {
                if (parts1[1] > parts2[1]){
                    return false
                } else if (parts1[1] < parts2[1]){
                    return true
                } else {
                    console.log('Same date')
                    return true
                }
            }
        }
    }

    function quickSortDates(origArray) {
        if (origArray.length <= 1) {
            return origArray;
        } 

        const left = [];
        const right = [];
        
        let newArray = [];

        let pivot = origArray.pop();
        let length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (compareDates(origArray[i], pivot)) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quickSortDates(left), pivot, quickSortDates(right));
        
    }
}

export default TestDataReader
