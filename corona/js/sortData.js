//let file = process.argv[2];

const fs = require('fs');
let file = fs.readFileSync('corona.json','utf-8');

function loadJSON(file) {
  return JSON.parse(file);
}

function dates(){
let array = loadJSON(file);
let filter=[]
for(info of array) {
  if(info.date === 20200331) {
  filter.push(info);
}
}
return filter;
}
//console.log(dates());

function renderTemplate(content) {
  return`
    <div class="state-data" id="state-data-texas">
    <table>
    <h2>${content.state}</h2>
    <tr>
      <th>date</th>
      <th>positive</th>
      <th>negative</th>
      <th>hospitalized</th>
      <th>death</th>
      <th>total</th>
      <th>hospitalizedIncrease</th>
    </tr>
    <tr>
    <td>${content.date}</td>
    <td>${content.positive}</td>
      <td>${content.negative}</td>
      <td>${content.hospitalized}</td>
      <td>${content.death}</td>
      <td>${content.total}</td>
      <td>${content.hospitalizedIncrease}</td>
    </tr>
  </table>
    </div>`;
}

  function fillHtml(sortedData) {
    let contents = [];
  for(let i=18;i < sortedData.length; i++) {
    console.log(renderTemplate(sortedData[i]))

  }
  }
  let dict = dates();
  let dict2 = dict[1];
  let array =fillHtml(dict);
  //console.log(renderTemplate(dict2));
  //console.log(dict2);
  console.log(fillHtml(dict))

module.exports = dates;
