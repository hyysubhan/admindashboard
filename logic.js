// Notifications
let noti = document.querySelector('.notify');
noti.addEventListener('click', function () {
  alert("NO NEW NOTIFICATION");
});

let msg = document.querySelector('.mail');
msg.addEventListener('click', function () {
  alert("NO NEW MESSAGE");
});

// Load Google Charts
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawAllCharts);

// Call both charts
function drawAllCharts() {
  drawChart1();
  drawChart2();
  drawChart3();
}

// First chart function
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {
    title: 'Monthly Sales Overview',
    vAxis: { title: 'Sneakers' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

// Second chart function
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {
    title: 'Monthly Sales Overview',
    vAxis: { title: 'BOOT' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
// THRDCHART
function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {
    title: 'Monthly Sales Overview',
    vAxis: { title: 'Casual' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
  chart.draw(data, options);
}
// geo
      google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Use'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {
          title: 'Monthly Sales Overview',
    vAxis: { title: 'Casual' },
    hAxis: { title: 'Month' },
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
      // table
            google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['PAKISTAN',  {v: 10000, f: '$10,000'}, true],
          ['JAPAN',   {v:8000,   f: '$8,000'},  false],
          ['CHAINA', {v: 12500, f: '$12,500'}, true],
          ['NEPAL',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }