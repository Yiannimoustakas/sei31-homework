const trainLines = [
  {line1: "Line N",
   stops: ["Times Square", "34th", "28th", "23th", "Union Square", "8th"],
 },
  {line2: "Line L",
   stops: ["8th", "6th", "Union Square", "3rd", "1st"],
 },
	{line3: "Line 6",
   stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
 }
];

const numStops = function (){
  let total = trainLines.length;
	for ( let i = 0; i < trainLines.length; i += 1 ) {
    console.log(trainLines[i].stops);
  }
};
