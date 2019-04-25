const Papa = require('papaparse');
const fs = require('fs');

function storeZoomRecords(zoomInput) {
  fs.readFile('data/zoom_records.csv', 'utf8', (err, data) => {
    const tmp = Papa.parse(data);

    const existingCSV = tmp.data
      .map(student => {
        return {
          user_id: student[0],
          user_name: student[1],
          device: student[2],
          ip_address: student[3],
          location: student[4],
          network_type: student[5],
          microphone: student[6],
          speaker: student[7],
          camera: student[8],
          data_center: student[19],
          connection_type: student[110],
          join_time: student[111],
          share_application: student[112],
          share_desktop: student[113],
          share_whiteboard: student[114],
          recording: student[115],
          pc_name: student[116],
          domain: student[117],
          mac_addr: student[118],
          harddisk_id: student[219],
          version: student[220],
          firstName: student[221],
          lastName: student[222],
          room: student[223],
          timestamp: student[224]
        };
      })
      .slice(1); // remove header from parse

    console.log(existingCSV[0]);
    const updatedCSV = existingCSV.concat(zoomInput);

    const csv = Papa.unparse(updatedCSV);

    fs.writeFile('data/zoom_records.csv', csv, error => {
      if (error) throw error;
    });
  });
}

module.exports = storeZoomRecords;
