<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "May",
          "JUN",
          "JUL"
        ],
        datasets: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "rgb(247, 178, 187, 0.50)",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgb(247, 178, 187)"
          },
          {
            label: "Data 2",
            data: [7, 15, 5, 7, 0, 10, 18],
            backgroundColor: "rgb(117, 208, 244, 0.50)",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgb(117, 208, 244)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "My Performance"
        }
      }
    );
  }
};
</script>