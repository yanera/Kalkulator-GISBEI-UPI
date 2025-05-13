document.getElementById("financeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const netIncome = parseFloat(document.getElementById("netIncome").value);
  const totalAssets = parseFloat(document.getElementById("totalAssets").value);
  const equity = parseFloat(document.getElementById("equity").value);
  const stockPrice = parseFloat(document.getElementById("stockPrice").value);
  const eps = parseFloat(document.getElementById("eps").value);
  const bvps = parseFloat(document.getElementById("bvps").value);

  const roa = (netIncome / totalAssets) * 100;
  const roe = (netIncome / equity) * 100;
  const per = stockPrice / eps;
  const pbv = stockPrice / bvps;

  document.getElementById("roaResult").textContent = roa.toFixed(2);
  document.getElementById("roeResult").textContent = roe.toFixed(2);
  document.getElementById("perResult").textContent = per.toFixed(2);
  document.getElementById("pbvResult").textContent = pbv.toFixed(2);

  document.getElementById("result").classList.remove("hidden");

  const ctx = document.getElementById("chart").getContext("2d");
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["ROA", "ROE", "PER", "PBV"],
      datasets: [{
        label: "Rasio Keuangan",
        data: [roa, roe, per, pbv],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
