/* eslint-disable camelcase */
const Path = require('path');
const Excel = require('exceljs');

// https://medium.com/swlh/sentiment-analysis-on-tweets-with-node-js-82b7f18c0456
// Get data from the file and analyse
async function getNTSAdataReport() {
  const wb = new Excel.Workbook();
  const excelFile = await wb.xlsx.readFile('accidentsData.xlsx');
  try {
    const ws = excelFile.worksheets[0];
    const raw_data = ws.getSheetValues();
    const data_slice_1 = raw_data.slice(8);
    const data = data_slice_1.slice(0, data_slice_1.length - 21);
    data.forEach((array) => {
      array.splice(0, 1);
      array.pop();
    });
    const result = {
      Pedestrian: {
        Date: data[0][0],
        Dead: data[0][1],
        SeriouslyInjured: data[0][2],
        SlightlyInjured: data[0][3]
      },
      drivers: {
        Date: data[0][0],
        Dead: data[0][4],
        SeriouslyInjured: data[0][5],
        SlightlyInjured: data[0][6]
      },
      passengers: {
        Date: data[0][0],
        Dead: data[0][7],
        SeriouslyInjured: data[0][8],
        SlightlyInjured: data[0][9]
      },
      pillion_pass: {
        Date: data[0][0],
        Dead: data[0][10],
        SeriouslyInjured: data[0][11],
        SlightlyInjured: data[0][12]
      },
      pedal_cyclist: {
        Date: data[0][0],
        Dead: data[0][13],
        SeriouslyInjured: data[0][14],
        SlightlyInjured: data[0][15]
      },
      motor_cyclist: {
        Date: data[0][0],
        Dead: data[0][16],
        SeriouslyInjured: data[0][17],
        SlightlyInjured: data[0][18]
      }
    };
    // return result;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getNTSAdataReport };
// getNTSAdataReport();
