

<script defer lang="ts">
// import Vue from 'vue';
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

// Vue.use(BootstrapVue);

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth();
var firstDate = "",
  lastDate = "";
var firstTime = 1;
export default {
  name: "App",
  methods: {
		dayClicked: () => {
			console.log("Day clicked!");
		},
    setcalander: function (type) {
      var divNew = document.getElementById("actualDay");
      divNew.innerHTML = "";
      var div = document.getElementById("monthYear");
      div.innerHTML = "";
      if (type == 0) {
        date = new Date();
      } else if (type == 1) {
        date = new Date(date.setMonth(m - 1));
        (y = date.getFullYear()), (m = date.getMonth());
        m = date.getMonth();
      } else if (type == 2) {
        date = new Date(date.setMonth(m + 1));
        (y = date.getFullYear()), (m = date.getMonth());
        m = date.getMonth();
      }

      var month = months[m];

      var firstDay = new Date(y, m, 1).getDay();
      var lastDay = new Date(y, m + 1, 0).getDate();
      var html = "<tr style='height: 55px;'>";
      var count = 0;
      var dayCount = 1;

      var div = document.getElementById("monthYear");
      div.innerHTML +=
        "<span style='padding-top: 5px; padding-left: 3px; font-size: 20px;'>" +
        month +
        "&nbsp" +
        y +
        "</span>";

      var monthInNumber = m + 1;
      if (monthInNumber < 10) {
        monthInNumber = "0" + monthInNumber;
      }
      for (var day = 0; day < firstDay; day++) {
        html += "<td class='clouredTd'></td>";
        count++;
      }
      for (dayCount = 1; dayCount <= lastDay; dayCount++) {
        var date2 = y;
        if (m < 9) date2 += "-0" + (m + 1);
        else date2 += "-" + (m + 1);

        if (dayCount < 10) date2 += "-0" + dayCount;
        else date2 += "-" + dayCount;

        if (dayCount == 1) firstDate = date2;
        if (dayCount == lastDay) lastDate = date2;

        if (count != 0 && count % 7 == 0) {
          html += " </tr>";
          html += " <tr style='height: 120px;'>";
        }
        html +=
          "<td class='clouredTd text cls" +
          date2 +
          "' tdVal=" +
          date2 +
          "  id='tabTd" +
          dayCount +
          "' align='center' style='width:14%; height:120px'><div style='float:left;'>" +
          dayCount +
          "</div></td>";
        count++;
      }

      while (count % 7 != 0) {
        html += "<td> </td>";
        count++;
      }

      if (!html.endsWith("</tr>")) html += " </tr>";

      var divNew = document.getElementById("actualDay");
      divNew.innerHTML += html;
    },
  },
  mounted() {
    this.setcalander(0);
  },
};
</script>

<template>
  <div class="App">
    <div
      class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12"
      style="padding: 0; border: 1px solid #000000"
    >
      <table
        class="table table-responsive table-bordered"
        style="margin-bottom: 1px"
      >
        <thead>
          <tr class="tb-head">
            <td colspan="7">
              <div class="row">
                <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12">
                  <span>
                    <a @click="setcalander(1)"> L </a>
                  </span>
                  <span
                    class="whiteCr text"
                    id="monthYear"
                    style="padding-left: 50%"
                  >
                  </span>
                  <span style="float: right">
                    <a @click="setcalander(2)"> R </a>
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr class="blueBr">
            <td align="center" class="blackBg text" style="width: 220px;">Sun</td>
            <td align="center" class="blackBg text" style="width: 14%">Mon</td>
            <td align="center" class="blackBg text" style="width: 14%">Tue</td>
            <td align="center" class="blackBg text" style="width: 14%">Wed</td>
            <td align="center" class="blackBg text" style="width: 14%">Thu</td>
            <td align="center" class="blackBg text" style="width: 14%">Fri</td>
            <td align="center" class="blackBg text" style="width: 14%">Sat</td>
          </tr>
        </thead>
        <tbody id="actualDay" style="background-color: white"></tbody>
      </table>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<style>
clouredTd {
  background-color: #f5f5f5;
  width: 15%;
}

td {
	cursor: pointer;
}

</style>