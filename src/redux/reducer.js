// reducers.js
import {
  FETCH_CHART_DATA_REQUEST,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_FAILURE,
  FETCH_CAMPAIGN_NAMES_REQUEST,
  FETCH_CAMPAIGN_NAMES_SUCCESS,
  FETCH_CAMPAIGN_NAMES_FAILURE,
  SET_PROGRESS_VALUES,
  FETCH_DOUGHNUT_CHART_DATA_REQUEST,
  FETCH_DOUGHNUT_CHART_DATA_SUCCESS,
  FETCH_DOUGHNUT_CHART_DATA_FAILURE,
} from "./action";

const initialState = {
  data: null,
  campaignNames: [],
  loadingChartData: false,
  loadingCampaignNames: false,
  doughnutChartData: null,

  errorChartData: null,
  errorCampaignNames: null,
  progressValues: [70, 50, 30, 10, 2],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART_DATA_REQUEST:
      return {
        ...state,
        loadingChartData: true,
        errorChartData: null,
      };
    case FETCH_CHART_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loadingChartData: false,
        errorChartData: null,
      };
    case FETCH_CHART_DATA_FAILURE:
      return {
        ...state,
        loadingChartData: false,
        errorChartData: action.payload,
      };
    case FETCH_CAMPAIGN_NAMES_REQUEST:
      return {
        ...state,
        loadingCampaignNames: true,
        errorCampaignNames: null,
      };
    case FETCH_CAMPAIGN_NAMES_SUCCESS:
      return {
        ...state,
        campaignNames: action.payload,
        loadingCampaignNames: false,
        errorCampaignNames: null,
      };
    case FETCH_CAMPAIGN_NAMES_FAILURE:
      return {
        ...state,
        loadingCampaignNames: false,
        errorCampaignNames: action.payload,
      };
    case SET_PROGRESS_VALUES:
      return {
        ...state,
        loadingChartData: false,
        errorChartData: null,
        progressValues: action.payload,
      };
    case FETCH_DOUGHNUT_CHART_DATA_REQUEST:
      return {
        ...state,
        loadingChartData: true,
        errorChartData: null,
      };
    case FETCH_DOUGHNUT_CHART_DATA_SUCCESS:
      return {
        ...state,
        doughnutChartData: action.payload,
        loadingChartData: false,
        errorChartData: null,
      };
    case FETCH_DOUGHNUT_CHART_DATA_FAILURE:
      return {
        ...state,
        loadingChartData: false,
        errorChartData: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
