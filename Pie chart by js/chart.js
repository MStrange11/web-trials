// const fs = require("fs");

function t_vol() {
  const xlmm = document.getElementById("xl").value;
  const ylmm = document.getElementById("yl").value;
  const zlmm = document.getElementById("zl").value;

  //   xlmm = 2000;
  //   ylmm = 2000;
  //   zlmm = 2000;

  xlm = xlmm / 1000;
  ylm = ylmm / 1000;
  zlm = zlmm / 1000;
  t_v = xlm * ylm * zlm;
  t_v = Math.round(t_v * 100) / 100;
  console.log("Total volume " + t_v + " meter");
  document.getElementById("total_vol").innerText =
    "Total volume " + t_v + " meter";
}

// Concrete quantity (m³) = Wall volume (m³)

let Concrete = () => {
  Cement_quantity = t_v * (1 / (1 + 2 + 4));
  Sand_quantity = t_v * (2 / (1 + 2 + 4));
  Aggregate_quantity = t_v * (4 / (1 + 2 + 4));
  Steel();
  Brick();
};

// Add Steel Quantity
let Steel = () => {
  Steel_quantity = t_v * 0.0491; // Based on 4.91% of the total volume
};

// Add Brick Quantity
let Brick = () => {
  Brick_quantity = t_v * 0.0126; // Based on 1.26% of the total volume
};

function log_() {
  console.log(
    "Cement quantity:",
    Cement_quantity,
    "m³,",
    Cement_percentage,
    "%"
  );

  console.log("Sand quantity:", Sand_quantity, "m³,", Sand_percentage, "%");

  console.log(
    "Aggregate quantity:",
    Aggregate_quantity,
    "m³,",
    Aggregate_percentage,
    "%"
  );

  console.log("Steel quantity:", Steel_quantity, "m³,", Steel_percentage, "%");

  console.log("Brick quantity:", Brick_quantity, "m³,", Brick_percentage, "%");

  t_per =
    Cement_percentage +
    Sand_percentage +
    Aggregate_percentage +
    Brick_percentage +
    Steel_percentage;
  console.log("total percentage", t_per);
}

function Concrete_p() {
  const total_volume_sum =
    Cement_quantity +
    Sand_quantity +
    Aggregate_quantity +
    Steel_quantity +
    Brick_quantity;

  Cement_percentage = (Cement_quantity / total_volume_sum) * 100;
  Sand_percentage = (Sand_quantity / total_volume_sum) * 100;
  Aggregate_percentage = (Aggregate_quantity / total_volume_sum) * 100;
  Steel_percentage = (Steel_quantity / total_volume_sum) * 100;
  Brick_percentage = (Brick_quantity / total_volume_sum) * 100;

  Cement_percentage = Math.round(Cement_percentage * 100) / 100;
  Sand_percentage = Math.round(Sand_percentage * 100) / 100;
  Aggregate_percentage = Math.round(Aggregate_percentage * 100) / 100;
  Steel_percentage = Math.round(Steel_percentage * 100) / 100;
  Brick_percentage = Math.round(Brick_percentage * 100) / 100;
}

let renC = function () {
  var chart = new CanvasJS.Chart("container", {
    animationEnabled: true,
    title: {
      text: "Construct material percentage",
    },
    data: [
      {
        type: "pie",
        startAngle: 150,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: Cement_percentage, label: "Cement" },
          { y: Sand_percentage, label: "Sand" },
          { y: Aggregate_percentage, label: "Aggregate" },
          { y: Steel_percentage, label: "Steel" },
          { y: Brick_percentage, label: "Brick" },
        ],
      },
    ],
  });
  chart.render();
};

function main() {
  t_vol();
  Concrete();
  Concrete_p();
  log_();
  renC();
  set_data();
}

function set_data() {
  jsondata = {
    x_len: xlm,
    y_len: ylm,
    z_len: zlm,
    total_vol: t_v,
    quantity: {
      cement: Cement_quantity,
      sand: Sand_quantity,
      aggregate: Aggregate_quantity,
      steel: Steel_quantity,
      brick: Brick_quantity,
    },
    percentage: {
      cement: Cement_percentage,
      sand: Sand_percentage,
      aggregate: Aggregate_percentage,
      steel: Steel_percentage,
      brick: Brick_percentage,
    },
  };
  display_json();
}
function display_json() {
  console.log(jsondata);
}

// main();
