import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../lib/init-firebase";
const summery = (data) => {
  data.map((d) => {
    if (d["data"]["section3"] === true) {
      count_s3 += 1;
    }
    if (d["data"]["section1"] === true) {
      count_s1 += 1;
    }
    if (d["data"]["section2"] === true) {
      count_s2 += 1;
    }
    if (d["data"]["section6"] === true) {
      count_s6 += 1;
    }
    if (d["data"]["section4"] === true) {
      count_s4 += 1;
    }
    if (d["data"]["section5"] === true) {
      count_s5 += 1;
    }
  });
};
const reStructuringData = (villageWiseData) => {
  // restructuring the data
  let result = [];
  Object.keys(villageWiseData).forEach(function (k) {
    result.push(villageWiseData[k]);
  });

  return result;
};

const villageWiseDataSummary = (data) => {
  const keys = [
    "closed_hh",
    "no_response_hh",
    "open_hh",
    "total_hh",
    "total_child",
  ];

  const result = data.reduce((r, e, i, a) => {
    keys.forEach((k) => (r[k] = (r[k] || 0) + parseInt(e[k])));
    if (!a[i + 1])
      Object.keys(e)
        .filter((k) => typeof e[k] == "string")
        .forEach((k) => (r[k] /= data.length));
    return r;
  }, {});

  return result;
};

const sectionOneDataReducer = (state, action) => {
  switch (action.type) {
    case "ENTERED_HH_DATA":
      let user_list = [];
      let district_list = [];
      let village_list = [];
      // getting unique values for dropdown
      action.payload.map((d) => {
        user_list.push(d.data.user_id);
        district_list.push(d.data.district);
        village_list.push(d.data.village);
      });

      // summary
      let result = [];
      let villageWiseData = action.payload.reduce((a, r) => {
        if (!a[r["data"]["village"]]) {
          a[r["data"].village] = {
            village: r["data"].village,
            district: r["data"].district,
            total_hh: 0,
            total_child: parseInt(0),
            closed_hh: 0,
            no_response_hh: 0,
            open_hh: 0,
          };
        }

        a[r["data"].village].total_hh += 1;
        a[r["data"].village].total_child += Number(r["data"].total_child);

        if (r["data"].household_status == 1) {
          a[r["data"].village].closed_hh += 1;
        } else if (r["data"].household_status == 2) {
          a[r["data"].village].no_response_hh += 1;
        } else if (r["data"].household_status == 3) {
          a[r["data"].village].open_hh += 1;
        }
        return a;
      }, {});

      // restructuring the data
      const formattedData = reStructuringData(villageWiseData);

      // villageWiseSummary
      const villageSummary = villageWiseDataSummary(formattedData);
      return {
        ...state,
        hhLevelData: action.payload,
        districtList: [...new Set(district_list)],
        userList: [...new Set(user_list)],
        villageList: [...new Set(village_list)],
        districtLevelData: formattedData,
        filteredData: action.payload,
        villageSummary: villageSummary,
      };
    case "DATA_FOR_DISTRICT":

    default:
      return state;
  }
};

export default sectionOneDataReducer;
