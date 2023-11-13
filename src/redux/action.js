// actions.js
export const FETCH_CHART_DATA_REQUEST = 'FETCH_CHART_DATA_REQUEST';
export const FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS';
export const FETCH_CHART_DATA_FAILURE = 'FETCH_CHART_DATA_FAILURE';

export const FETCH_CAMPAIGN_NAMES_REQUEST = 'FETCH_CAMPAIGN_NAMES_REQUEST';
export const FETCH_CAMPAIGN_NAMES_SUCCESS = 'FETCH_CAMPAIGN_NAMES_SUCCESS';
export const FETCH_CAMPAIGN_NAMES_FAILURE = 'FETCH_CAMPAIGN_NAMES_FAILURE';
export const SET_PROGRESS_VALUES = 'SET_PROGRESS_VALUES';
export const FETCH_DOUGHNUT_CHART_DATA_REQUEST = 'FETCH_DOUGHNUT_CHART_DATA_REQUEST';
export const FETCH_DOUGHNUT_CHART_DATA_SUCCESS = 'FETCH_DOUGHNUT_CHART_DATA_SUCCESS';
export const FETCH_DOUGHNUT_CHART_DATA_FAILURE = 'FETCH_DOUGHNUT_CHART_DATA_FAILURE';

export const fetchChartDataRequest = () => ({
  type: FETCH_CHART_DATA_REQUEST,
});

export const fetchChartDataSuccess = (data) => ({
  type: FETCH_CHART_DATA_SUCCESS,
  payload: data,
});

export const fetchChartDataFailure = (error) => ({
  type: FETCH_CHART_DATA_FAILURE,
  payload: error,
});

export const fetchCampaignNamesRequest = () => ({
  type: FETCH_CAMPAIGN_NAMES_REQUEST,
});

export const fetchCampaignNamesSuccess = (campaignNames) => ({
  type: FETCH_CAMPAIGN_NAMES_SUCCESS,
  payload: campaignNames,
});

export const fetchCampaignNamesFailure = (error) => ({
  type: FETCH_CAMPAIGN_NAMES_FAILURE,
  payload: error,
});

export const setProgressValues = (values) => ({
    type: SET_PROGRESS_VALUES,
    payload: values,
  });

  export const fetchDoughnutChartDataRequest = () => ({
    type: FETCH_DOUGHNUT_CHART_DATA_REQUEST,
  });
  
  export const fetchDoughnutChartDataSuccess = (data) => ({
    type: FETCH_DOUGHNUT_CHART_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchDoughnutChartDataFailure = (error) => ({
    type: FETCH_DOUGHNUT_CHART_DATA_FAILURE,
    payload: error,
  });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchChartDataRequest());
    dispatch(fetchCampaignNamesRequest());

    try {
      const [chartData, campaignNames] = await Promise.all([
        Promise.resolve(mockChartData),
        Promise.resolve(mockCampaignNames),
      ]);

      dispatch(fetchChartDataSuccess(chartData));
      dispatch(fetchCampaignNamesSuccess(campaignNames));
    } catch (error) {
      dispatch(fetchChartDataFailure(error));
      dispatch(fetchCampaignNamesFailure(error));
    }
  };
};


export const fetchDoughnutChartData = () => {
    return async (dispatch) => {
      dispatch(fetchDoughnutChartDataRequest());
  
      try {
        setTimeout(() => {
          const mockData = {
            labels: ["IOS", "Android", "Blackberry", "Symbian", "Others"],
            data: [30, 10, 20, 10, 30],
          };
          dispatch(fetchDoughnutChartDataSuccess(mockData));
        }, 1000);
      } catch (error) {
        dispatch(fetchDoughnutChartDataFailure(error.message));
      }
    };
  };



const mockChartData = {
  labels: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", "Jan 06", ""],
  datasets: [
    {
      label: "First Dataset",
      data: [18, 72, 8, 40, 20, 82, 10],
      backgroundColor: "rgba(155, 188, 197, 0.3)",
      borderColor: "#9BBCC5",
      borderWidth: 2,
      lineTension: 0.4,
      pointRadius: 0,
      pointHitRadius: 0,
      fill: true,
    },
    {
      label: "Second Dataset",
      data: [80, 22, 67, 10, 121, 0, 10],
      backgroundColor: "rgba(22, 189, 156, 0.3)",
      borderColor: "#16BD9C",
      borderWidth: 2,
      lineTension: 0.5,
      pointRadius: 0,
      pointHitRadius: 0,
      fill: true,
    },
  ],
};

const mockCampaignNames = [
  "Facebook Campaign",
  "Twitter Campaign",
  "Conventional Media",
  "Bill boards",
];
