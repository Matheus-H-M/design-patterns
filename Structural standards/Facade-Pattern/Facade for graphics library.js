// This function is responsible for rendering a chart.
// It simply logs the processed data to the console.
function renderChart(data){
   console.log("Renderizador gráfico com dados:", data);
}

// This is a facade function that simplifies the process of preparing data for the chart.
// It receives an array of values and transforms it into a format suitable for the chart.
function ChartFacade(values){
   // The values are mapped to an array of objects with x and y coordinates.
   // 'x' is the index of the value in the array, and 'y' is the value itself.
   const data = values.map((v, i) => ({ x: i, y: v }));

   // Calls the renderChart function with the processed data.
   renderChart(data);
}

// Example usage: calls ChartFacade with an array of values [10, 20, 30].
// The function will process this data and pass it to renderChart.
ChartFacade([10, 20, 30]);
