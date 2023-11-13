// actions.js

import axios from 'axios';
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
      const chartDataResponse = await axios.get('https://6551b1c45c69a779032901ee.mockapi.io/Linechart');
      const mockChartData = {
        labels: chartDataResponse.data[0].labels,
        datasets: [
          {
            label: chartDataResponse.data[0].datasets[0].label,
            data: chartDataResponse.data[0].datasets[0].data,
            backgroundColor: "rgba(155, 188, 197, 0.3)",
            borderColor: "#9BBCC5",
            borderWidth: 2,
            lineTension: 0.4,
            pointRadius: 0,
            pointHitRadius: 0,
            fill: true,
          },
          {
            label: chartDataResponse.data[0].datasets[1].label,
            data: chartDataResponse.data[0].datasets[1].data,
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
        const DoughnutDataResponse = await axios.get('https://6551b1c45c69a779032901ee.mockapi.io/DoughnutChartData');
        setTimeout(() => {
          const mockData = {
            labels: DoughnutDataResponse.data[0].labels,
            data: DoughnutDataResponse.data[0].data,
          };
          dispatch(fetchDoughnutChartDataSuccess(mockData));
        }, 1000);
      } catch (error) {
        dispatch(fetchDoughnutChartDataFailure(error.message));
      }
    };
  };

const mockCampaignNames = [
  "Facebook Campaign",
  "Twitter Campaign",
  "Conventional Media",
  "Bill boards",
];
