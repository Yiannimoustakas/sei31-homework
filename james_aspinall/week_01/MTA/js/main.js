const getFormData = () => {
  let formDepartLine = document.getElementById("departureLine").value;
  let formdDepartStation = document.getElementById("departureStation").value;
  let formArriveLine = document.getElementById("arrivalLine").value;
  let formArriveStation = document.getElementById("arrivalStation").value;
  let tripOutput = " ";

  const trainLines = {
    "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th", ],
    "L": ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }


  const getStations = (formDepartLine, formdDepartStation, formArriveStation) => {
    let stations = trainLines[formDepartLine];
    let stationList = "";
    let departStationIndex = stations.indexOf(formdDepartStation);
    let arrivalStationIndex = stations.indexOf(formArriveStation);

    if (departStationIndex < arrivalStationIndex) {
      for (let i = departStationIndex + 1; i <= arrivalStationIndex; i++) {
        stationList += stations[i] + ", ";
        stopsCount++;
      }
    } else {
      for (let i = departStationIndex - 1; i >= arrivalStationIndex; i--) {
        stationList += stations[i] + ", ";
        stopsCount++;
      }
    }
    return stationList;
  }

  const planTrip = (formDepartLine, formdDepartStation, formArriveLine, formArriveStation) => {
    stopsCount = 0;


    if (formDepartLine === formArriveLine) {
      let sameLineTrip = getStations(formDepartLine, formdDepartStation, formArriveStation);
      tripOutput += (`You will travel through the following stops on the ${formDepartLine } Line: ${sameLineTrip} -  Have a safe trip. Thank You for choicing MTA.`)
      console.log(`You will travel through the following stops on the ${formDepartLine } Line: ${sameLineTrip} -  Have a safe trip. Thank You for choicing MTA.`)
    } else {
      let tripToUnionSqaure = getStations(formDepartLine, formdDepartStation, "Union Square");
      let tripFromUnionSqaure = getStations(formArriveLine, "Union Square", formArriveStation);

      console.log(`You must travel through the following stops on the ${formDepartLine}  Line: ${tripToUnionSqaure} - You will need to change at Union Square and head to the ${formArriveLine} formDepartLine. From there, continue on the ${formArriveLine} Line through: ${tripFromUnionSqaure} - That is ${stopsCount} in total. Have a safe trip, Thank You for choicing MTA.`);
      tripOutput += (`You must travel through the following stops on the ${formDepartLine}  Line: ${tripToUnionSqaure} - You will need to change at Union Square and head to the ${formArriveLine} formDepartLine. From there, continue on the ${formArriveLine} Line through: ${tripFromUnionSqaure} - That is ${stopsCount} in total. Have a safe trip, Thank You for choicing MTA.`);

    }

  }
  planTrip(formDepartLine, formdDepartStation, formArriveLine, formArriveStation);
  document.getElementById('tripInfo').innerHTML = tripOutput;
}
