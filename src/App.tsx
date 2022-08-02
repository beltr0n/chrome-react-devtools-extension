import React from 'react';
import './App.css';
import GeneralStats, { GeneralStatsData } from './GeneralStats';
import MediaStats, { MediaStatsData } from './MediaStats';
import { DOMMessage, DOMMessageResponse } from './types';


type ActiveTab = "GeneralStatsTab" | "MediaStatsTab" | "UFDStatsTab";

function App() {
  // const [title, setTitle] = React.useState('');
  // const [headlines, setHeadlines] = React.useState<string[]>([]);
  const dummyGeneralStats:GeneralStatsData = {
    callId: "No Call",
    isRecording: "false"
  }

  const dummyMediaStats:MediaStatsData = {

  };

  const [generalStatsData, setGeneralStatsData] = React.useState<GeneralStatsData>(dummyGeneralStats);
  const [mediaStatsData, setMediaStatsData] = React.useState(dummyMediaStats);
  // const [UFDStatsData, setUFDStatsData] = React.useState(dummyGeneralStats);
  const [activeTab, setActiveTab] = React.useState<ActiveTab>("GeneralStatsTab");

  // React.useEffect(() => {
  //   /**
  //    * We can't use "chrome.runtime.sendMessage" for sending messages from React.
  //    * For sending messages from React we need to specify which tab to send it to.
  //    */
  //   chrome.tabs && chrome.tabs.query({
  //     active: true,
  //     currentWindow: true
  //   }, tabs => {
  //     /**
  //      * Sends a single message to the content script(s) in the specified tab,
  //      * with an optional callback to run when a response is sent back.
  //      *
  //      * The runtime.onMessage event is fired in each content script running
  //      * in the specified tab for the current extension.
  //      */
  //     chrome.tabs.sendMessage(
  //       tabs[0].id || 0,
  //       { type: 'GET_DOM' } as DOMMessage,
  //       (response: DOMMessageResponse) => {
  //         setTitle(response.title);
  //         setHeadlines(response.headlines);
  //       });
  //   });
  // });

  React.useEffect(() => {
    var port = chrome.runtime.connect({name: "devtools_panel"});
    port.onMessage.addListener(function(msg) {
        if(msg.type === "GeneralStats") {
          setGeneralStatsData(msg.data);
        }
        else if(msg.type == "MediaStats") {
          setMediaStatsData(msg.data)
        }
        else if(msg.type == "UserFacingDiagnostics") {

        }
    });
  })

  return (
    <div className="App">
      <h1>Communications Monitoring DevTools!</h1>
      <div>
        <button onClick={() => {
          setActiveTab("GeneralStatsTab")
        }}>General Stats</button>
        <button onClick={() => {
          setActiveTab("MediaStatsTab")
        }}>Media Stats</button>
      </div>
      <div>
        <GeneralStats data={generalStatsData} visibility={activeTab === "GeneralStatsTab"} />
        <MediaStats data={mediaStatsData} visibility={activeTab === "MediaStatsTab"}  />
      </div>
    </div>
  );
}

export default App;
