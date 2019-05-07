module.exports = {
environment: "local",
  uploadBucket: "oam-uploader-local-temp",
  googleClient:
    "36015894456-cln93odnr88523ssjkaaf8km7fi0snos.apps.googleusercontent.com",
  googleDeveloperKey: "",
  map: {
    mapbox: {
      accessToken:
        "pk.eyJ1Ijoib3BlbmFlcmlhbG1hcCIsImEiOiJjaXl4MjM5c20wMDBmMzNucnZtbnYwZTcxIn0.IKG5flWCS6QfpO3iOdRveg"
    },

    initialZoom: 8,
    minZoom: 2,
    maxZoom: 18,

    initialView: [-51.4819335,-15.0296857]
  },
  catalog: {
    url: "https://api.openaerialmap.org"
  },
  oamStatus: "https://status.openaerialmap.org/healthcheck",
  feedbackSubmissionURL:
    "https://getsimpleform.com/messages/ajax?form_api_token=506fc2ac58582416b6086a68a343e344",
  OAMBrowserUrl: "https://map.openaerialmap.org",
  awsKey: "AKIAJJRD6S67FNI7SZWQ"};
