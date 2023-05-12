import React from 'react';
import './App.css';
import GeneralStats, { GeneralStatsData } from './GeneralStats';
import MediaStats, { MediaStatsData } from './MediaStats';
import {
  makeStyles,
  shorthands,
  tokens,
  Tab,
  TabList,
  SelectTabData,
  SelectTabEvent,
  TabValue,
} from "@fluentui/react-components";
import UserFacingDiagnostics, { DiagnosticQuality, UserFacingDiagnosticsData } from './UserFacingDiagnostics';

type DiagnosticValueType = "DiagnosticQuality" | "DiagnosticFlag";

type DiagnosticData = {
  diagnostic: string,
  value: DiagnosticQuality | boolean;
  valueType: DiagnosticValueType;
}

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  }
  // panels: {
  //   ...shorthands.padding(0, "10px"),
  //   "& th": {
  //     textAlign: "left",
  //     ...shorthands.padding(0, "30px", 0, 0),
  //   },
  // },
});

function App() {
  const styles = useStyles();
  const dummyGeneralStats:GeneralStatsData = {
    callId: "No Call",
    participantId: "N/A",
    isRecording: "false",
    isTranscribing: "false",
    isScreenSharing: false,
    chosenCamera: "N/A",
    chosenMicrophone: "N/A",
    userInfo: "N/A"
  }

  const dummyMediaStats:MediaStatsData = {

  };

  const baseUFDData: UserFacingDiagnosticsData = {
    //network
    noNetwork: false,
    networkRelaysNotReachable: false,
    networkReconnect: DiagnosticQuality.Unknown,
    networkReceiveQuality: DiagnosticQuality.Unknown,
    networkSendQuality: DiagnosticQuality.Unknown,
    //audio
    noSpeakerDevicesEnumerated: false,
    speakingWhileMicrophoneIsMuted: false,
    noMicrophoneDevicesEnumerated: false,
    microphoneNotFunctioning: false,
    microphoneMuteUnexpectedly: false,
    microphonePermissionDenied: false,
    //camera
    cameraFreeze: false,
    cameraStartFailed: false,
    cameraStartTimedOut: false,
    cameraPermissionDenied: false,
    cameraStoppedUnexpectedly: false,
    //misc
    screenshareRecordingDisabled: false,
    capturerStartFailed: false,
    capturerStoppedUnexpectedly: false
  };

  const [generalStatsData, setGeneralStatsData] = React.useState<GeneralStatsData>(dummyGeneralStats);
  const [mediaStatsData, setMediaStatsData] = React.useState(dummyMediaStats);
  const [UFDData, setUFDData] = React.useState<UserFacingDiagnosticsData>(baseUFDData);
  const [activeTab, setActiveTab] = React.useState<TabValue>("general-stats");

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setActiveTab(data.value);
  };

  // React.useEffect(() => {
  //   var port = chrome.runtime.connect({name: "devtools_panel"});
  //   port.onMessage.addListener(function(msg) {
  //       if(msg.type === "GeneralStats") {
  //         setGeneralStatsData(msg.data);
  //       }
  //       else if(msg.type === "MediaStats") {
  //         setMediaStatsData(msg.data)
  //       }
  //       else if(msg.type === "UserFacingDiagnostics") {
  //         let clone = Object.assign({}, UFDData)
  //         const data = msg.data as DiagnosticData;
  //         (clone as any)[data.diagnostic] = data.value; //HACKY
  //         setUFDData(clone);
  //       }
  //   });
  // });

  return (
    <div className="App">
      <h1>ACS DevTools</h1>
      <div>
        <TabList selectedValue={activeTab} onTabSelect={onTabSelect}>
          <Tab id="GeneralStats" value={"general-stats"}>
            General Stats
          </Tab>
          <Tab id="MediaStats" value={"media-stats"}>
            Media Stats
          </Tab>
          <Tab id="UFD" value={"ufd"}>
            User Facing Diagnostics
          </Tab>
        </TabList>
      </div>
      <div className={styles.root}>
        {activeTab === "ufd" && <UserFacingDiagnostics data={UFDData} /> }
        {activeTab === "general-stats" && <GeneralStats data={generalStatsData} /> }
        {activeTab === "media-stats" && <MediaStats data={mediaStatsData} /> }
      </div>
    </div>
  );
}

export default App;
