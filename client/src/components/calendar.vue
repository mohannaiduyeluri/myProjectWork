<script defer lang="ts">
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import { ITask, tasks } from "../models/tasks";
import { DAYS, MONTHS } from "../models/calendar";

var months = MONTHS;
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth();
var firstDate = "",
lastDate = "";
var firstTime = 1;
// var monthYearHtml = "";
export default {
  name: "App",
  data() {
    return {
      DAYS: DAYS,
      monthYearHtml: "March 2020",
      actualDayHtml:""
    }
  },
  methods: {
    dayClicked: () => {
      console.log("Day clicked!");
    },
    getDateObject: function (type) {
      // alert("working");
      if (type == 0) {
        return new Date();
      } else if (type == 1) {
        return new Date(date.setMonth(m - 1));
      } else if (type == 2) {
        return new Date(date.setMonth(m + 1));
      }
    },
    setcalander: function (type) {
      var divNew = document.getElementById("actualDay");
      divNew.innerHTML = "";
      // var div = document.getElementById("monthYear");
      // div.innerHTML = "";
      date = this.getDateObject(type)
      y = date.getFullYear();
      m = date.getMonth();
      var month = MONTHS[m];

      var firstDay = new Date(y, m, 1).getDay();
      var lastDay = new Date(y, m + 1, 0).getDate();
      var html = "<tr style='height: 80px;'>";
      var count = 0;
      var dayCount = 1;

      // var div = document.getElementById("monthYear");
      this.monthYearHtml =
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
      var cnt = 0;
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
          html += " <tr style='height: 80px;'>";
        }
        html +=
          "<td class='clouredTd" +
          date2 +
          "' tdVal=" +
          date2 +
          "  id='tabTd" +
          dayCount +
          "' align='center'><div style='float:left;'>" +
          dayCount +
          "</div>";
        var dd = monthInNumber + "-" + dayCount + "-" + y;
        //        console.log(dd);
        // cnt = 0;
        for (let i = 0; i < tasks.value.length; i++) {
          if (tasks.value[i].date == dd) {
            cnt++;
            if (tasks.value[i].done == true) {
              html +=
                "<div style='float:right;font-size: 12px;background-color:green;'><i style='color:white'>" +
                cnt + ") " + tasks.value[i].title +
                "&nbsp;&nbsp;</i></div>";
            } else {
              html +=
                "<div style='float:right;font-size: 12px;background-color:red;'><i style='color:white'>" +
                cnt + ") " + tasks.value[i].title +
                "&nbsp;&nbsp;</i></div>";
            }
          }
        }
        cnt = 0;
        html += "</td>";

        count++;
      }

      while (count % 7 != 0) {
        html += "<td> </td>";
        count++;
      }

      if (!html.endsWith("</tr>")) html += " </tr>";

      // var divNew = document.getElementById("actualDay");
      // divNew.innerHTML += html;
      this.actualDayHtml = html;
    },
  },
  mounted() {
    this.setcalander(0);
    // this.data.actualDayHtml = "mohan";
  },
};
</script>

<template>
  <div class="App">
    <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 calendar"
      style="padding: 0; border: 1px solid #000000">
      <table class="table table-responsive table-bordered" style="margin-bottom: 1px">
        <thead>
          <tr class="tb-head">
            <td colspan="7">
              <div class="row">
                <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12">
                  <span>
                    <a @click="setcalander(1)"> <i class="fa fa-arrow-left"></i> </a>
                  </span>
                  <span v-html="monthYearHtml" class="whiteCr text" style="padding-left: 45%">
                  </span>
                  <span style="float: right">
                    <a @click="setcalander(2)"> <i class="fa fa-arrow-right"></i> </a>
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr class="blueBr">
            <td align="center" class="blackBg text" style="width: 220px;" v-for="item in DAYS">{{ item }}</td>
          </tr>
        </thead>
        <tbody id="actualDay" v-html="actualDayHtml" style="background-color: white"></tbody>
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

.calendar {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-35%);
  width: 85%;
}
</style>