import React from 'react';
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

export interface MediaStatsDataValue {
    timestamp: Date
    value: string | number
    unit: string
}
  
export interface MediaStatsData {
    //Misc
    sentBWEstimate?: MediaStatsDataValue[]
    sentBWEstimateValue?: MediaStatsDataValue[]
    //Audio Sent
    audioSendBitrate?: MediaStatsDataValue[]
    audioSendBitrateValue?: MediaStatsDataValue[]
    audioSendPackets?: MediaStatsDataValue[]
    audioSendPacketsValue?: MediaStatsDataValue[]
    audioSendPacketsLost?: MediaStatsDataValue[]
    audioSendPacketsLostValue?: MediaStatsDataValue[]
    audioSendCodecName?: MediaStatsDataValue[]
    audioSendCodecNameValue?: MediaStatsDataValue[]
    audioSendRtt?: MediaStatsDataValue[]
    audioSendRttValue?: MediaStatsDataValue[]
    audioSendPairRtt?: MediaStatsDataValue[]
    audioSendPairRttValue?: MediaStatsDataValue[]
    audioSendAudioInputLevel?: MediaStatsDataValue[]
    audioSendAudioInputLevelValue?: MediaStatsDataValue[]
    //Audio Receive
    audioRecvBitrate?: MediaStatsDataValue[]
    audioRecvBitrateValue?: MediaStatsDataValue[]
    audioRecvJitterBufferMs?: MediaStatsDataValue[]
    audioRecvJitterBufferMsValue?: MediaStatsDataValue[]
    audioRecvPacketsLost?: MediaStatsDataValue[]
    audioRecvPacketsLostValue?: MediaStatsDataValue[]
    audioRecvPackets?: MediaStatsDataValue[]
    audioRecvPacketsValue?: MediaStatsDataValue[]
    audioRecvPairRtt?: MediaStatsDataValue[]
    audioRecvPairRttValue?: MediaStatsDataValue[]
    audioRecvAudioOutputLevel?: MediaStatsDataValue[]
    audioRecvAudioOutputLevelValue?: MediaStatsDataValue[]
    //Video Sent
    videoSendFrameRateSent?: MediaStatsDataValue[]
    videoSendFrameRateSentValue?: MediaStatsDataValue[]
    videoSendFrameWidthSent?: MediaStatsDataValue[]
    videoSendFrameWidthSentValue?: MediaStatsDataValue[]
    videoSendFrameHeightSent?: MediaStatsDataValue[]
    videoSendFrameHeightSentValue?: MediaStatsDataValue[]
    videoSendBitrate?: MediaStatsDataValue[]
    videoSendBitrateValue?: MediaStatsDataValue[]
    videoSendPackets?: MediaStatsDataValue[]
    videoSendPacketsValue?: MediaStatsDataValue[]
    videoSendRtt?: MediaStatsDataValue[]
    videoSendRttValue?: MediaStatsDataValue[]
    videoSendPairRtt?: MediaStatsDataValue[]
    videoSendPairRttValue?: MediaStatsDataValue[]
    videoSendPacketsLost?: MediaStatsDataValue[]
    videoSendPacketsLostValue?: MediaStatsDataValue[]
    videoSendFrameRateInput?: MediaStatsDataValue[]
    videoSendFrameRateInputValue?: MediaStatsDataValue[]
    videoSendFrameWidthInput?: MediaStatsDataValue[]
    videoSendFrameWidthInputValue?: MediaStatsDataValue[]
    videoSendFrameHeightInput?: MediaStatsDataValue[]
    videoSendFrameHeightInputValue?: MediaStatsDataValue[]
    videoSendCodecName?: MediaStatsDataValue[]
    videoSendCodecNameValue?: MediaStatsDataValue[]
    //Video Received
    videoRecvBitrate?: MediaStatsDataValue[]
    videoRecvBitrateValue?: MediaStatsDataValue[]
    videoRecvPackets?: MediaStatsDataValue[]
    videoRecvPacketsValue?: MediaStatsDataValue[]
    videoRecvPacketsLost?: MediaStatsDataValue[]
    videoRecvPacketsLostValue?: MediaStatsDataValue[]
    videoRecvJitterBufferMs?: MediaStatsDataValue[]
    videoRecvJitterBufferMsValue?: MediaStatsDataValue[]
    videoRecvPairRtt?: MediaStatsDataValue[]
    videoRecvPairRttValue?: MediaStatsDataValue[]
    videoRecvFrameRateReceived?: MediaStatsDataValue[]
    videoRecvFrameRateReceivedValue?: MediaStatsDataValue[]
    videoRecvFrameWidthReceived?: MediaStatsDataValue[]
    videoRecvFrameWidthReceivedValue?: MediaStatsDataValue[]
    videoRecvFrameHeightReceived?: MediaStatsDataValue[]
    videoRecvFrameHeightReceivedValue?: MediaStatsDataValue[]
    videoRecvFrameRateOutput?: MediaStatsDataValue[]
    videoRecvFrameRateOutputValue?: MediaStatsDataValue[]
    videoRecvFrameRateDecoded?: MediaStatsDataValue[]
    videoRecvFrameRateDecodedValue?: MediaStatsDataValue[]
    videoRecvLongestFreezeDuration?: MediaStatsDataValue[]
    videoRecvLongestFreezeDurationValue?: MediaStatsDataValue[]
    videoRecvTotalFreezeDuration?: MediaStatsDataValue[]
    videoRecvTotalFreezeDurationValue?: MediaStatsDataValue[]
    //Screen Sharing
    screenSharingRecvLongestFreezeDuration?: MediaStatsDataValue[]
    screenSharingRecvTotalFreezeDuration?: MediaStatsDataValue[]
    screenSharingSendFrameWidthInput?: MediaStatsDataValue[]
    screenSharingSendFrameHeightInput?: MediaStatsDataValue[]
    screenSharingSendFrameWidthSent?: MediaStatsDataValue[]
    screenSharingSendFrameHeightSent?: MediaStatsDataValue[]
    screenSharingRecvFrameWidthReceived?: MediaStatsDataValue[]
    screenSharingRecvFrameHeightReceived?: MediaStatsDataValue[]
    screenSharingSendFrameRateInput?: MediaStatsDataValue[]
    screenSharingSendFrameRateSent?: MediaStatsDataValue[]
    screenSharingRecvFrameRateReceived?: MediaStatsDataValue[]
    screenSharingRecvFrameRateDecoded?: MediaStatsDataValue[]
    screenSharingRecvFrameRateOutput?: MediaStatsDataValue[]
    screenSharingSendCodecName?: MediaStatsDataValue[]
    screenSharingRecvCodecName?: MediaStatsDataValue[]
    screenSharingRecvPacketsLost?: MediaStatsDataValue[]
    screenSharingSendPacketsLost?: MediaStatsDataValue[]
    screenSharingRecvJitterBufferMs?: MediaStatsDataValue[]
}

interface MediaStatsProps {
    data: MediaStatsData,
}

const useStyles = makeStyles({
    propsTable: {
      "& td:first-child": {
        fontWeight: tokens.fontWeightSemibold,
      },
      "& td": {
        ...shorthands.padding(0, "30px", 0, 0),
      },
    }
});

function MediaStats(props: MediaStatsProps) {
    const [activeTab, setActiveTab] = React.useState<TabValue>("misc");
    const mediaStats:MediaStatsData = props.data;

    const styles = useStyles();

    const displayMediaStat = (mediaStatsValues: MediaStatsDataValue[] | undefined) => {
        if(!mediaStatsValues) {
            return '-';
        }
        const mediaStatsValue = mediaStatsValues[mediaStatsValues.length - 1];
        const value = typeof mediaStatsValue.value === 'number' ? Math.round(mediaStatsValue.value as number) : mediaStatsValue.value;
        const unit = mediaStatsValue.unit === 'None' ? '' : mediaStatsValue.unit
        return value + unit;
    }

    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setActiveTab(data.value);
    };

    const Misc = React.memo(() => (
        <div role="tabpanel" aria-labelledby="Misc">
            <table className={styles.propsTable}>
                <tbody>
                    <tr>
                        <td className='sectionHeader'>BandWidth</td>
                        <td className='sectionHeader'><a href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/media-quality-sdk#bandWidth-metrics" target="_blank">Learn more</a></td>
                    </tr>
                    
                    <tr>
                        <td id='sentBWEstimate'>Sent BandWidth Estimate</td>
                        <td id='sentBWEstimateValue'>{displayMediaStat(mediaStats.sentBWEstimate)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ))

    const Audio = React.memo(() => (
        <div role="tabpanel" aria-labelledby="Audio">
          <table className={styles.propsTable}>
            <tbody>
                <tr>
                    <td className='sectionHeader'>Audio</td>
                    <td className='sectionHeader'><a href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/media-quality-sdk#audio-quality-metrics" target="_blank">Learn more</a></td>
                </tr>
                
                <tr>
                    <td id='audioSendBitrate'>Send Bitrate</td>
                    <td id='audioSendBitrateValue'>{displayMediaStat(mediaStats.audioSendBitrate)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendPackets'>Sent Packets</td>
                    <td id='audioSendPacketsValue'>{displayMediaStat(mediaStats.audioSendPackets)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendPacketsLost'>Lost Send Packets</td>
                    <td id='audioSendPacketsLostValue'>{displayMediaStat(mediaStats.audioSendPacketsLost)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendCodecName'>Send codec</td>
                    <td id='audioSendCodecNameValue'>{displayMediaStat(mediaStats.audioSendCodecName)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendRtt'>Send Round-Trip Time</td>
                    <td id='audioSendRttValue'>{displayMediaStat(mediaStats.audioSendRtt)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendPairRtt'>Send Pair Round-Trip Time</td>
                    <td id='audioSendPairRttValue'>{displayMediaStat(mediaStats.audioSendPairRtt)}</td>
                </tr>
                
                <tr>
                    <td id='audioSendAudioInputLevel'>Microphone Input Level</td>
                    <td id='audioSendAudioInputLevelValue'>{displayMediaStat(mediaStats.audioSendAudioInputLevel)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvBitrate'>Receive Bitrate</td>
                    <td id='audioRecvBitrateValue'>{displayMediaStat(mediaStats.audioRecvBitrate)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvJitterBufferMs'>Receive Jitter</td>
                    <td id='audioRecvJitterBufferMsValue'>{displayMediaStat(mediaStats.audioRecvJitterBufferMs)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvPacketsLost'>Lost Receive Packets</td>
                    <td id='audioRecvPacketsLostValue'>{displayMediaStat(mediaStats.audioRecvPacketsLost)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvPackets'>Received packets</td>
                    <td id='audioRecvPacketsValue'>{displayMediaStat(mediaStats.audioRecvPackets)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvPairRtt'>Receive Pair Round-Trip Time</td>
                    <td id='audioRecvPairRttValue'>{displayMediaStat(mediaStats.audioRecvPairRtt)}</td>
                </tr>
                
                <tr>
                    <td id='audioRecvAudioOutputLevel'>Speaker Output Level</td>
                    <td id='audioRecvAudioOutputLevelValue'>{displayMediaStat(mediaStats.audioRecvAudioOutputLevel)}</td>
                </tr>
            </tbody>
          </table>
        </div>
    ));

    const Video = React.memo(() => (
        <div role="tabpanel" aria-labelledby="Video">
            <table className={styles.propsTable}>
                <tbody>
                <tr>
                    <td id='videoSendFrameRateSent'>Sent Frame Rate</td>
                    <td id='videoSendFrameRateSentValue'>{displayMediaStat(mediaStats.videoSendFrameRateSent)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendFrameWidthSent'>Sent Width</td>
                    <td id='videoSendFrameWidthSentValue'>{displayMediaStat(mediaStats.videoSendFrameWidthSent)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendFrameHeightSent'>Sent Height</td>
                    <td id='videoSendFrameHeightSentValue'>{displayMediaStat(mediaStats.videoSendFrameHeightSent)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendBitrate'>Send Bitrate</td>
                    <td id='videoSendBitrateValue'>{displayMediaStat(mediaStats.videoSendBitrate)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendPackets'>Sent Packets</td>
                    <td id='videoSendPacketsValue'>{displayMediaStat(mediaStats.videoSendPackets)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendRtt'>Send Round-Trip Time</td>
                    <td id='videoSendRttValue'>{displayMediaStat(mediaStats.videoSendRtt)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendPairRtt'>Send Pair Round-Trip Time</td>
                    <td id='videoSendPairRttValue'>{displayMediaStat(mediaStats.videoSendPairRtt)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendPacketsLost'>Send Packet Loss</td>
                    <td id='videoSendPacketsLostValue'>{displayMediaStat(mediaStats.videoSendPacketsLost)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendFrameRateInput'>Sent Framerate Input</td>
                    <td id='videoSendFrameRateInputValue'>{displayMediaStat(mediaStats.videoSendFrameRateInput)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendFrameWidthInput'>Sent Frame Width Input</td>
                    <td id='videoSendFrameWidthInputValue'>{displayMediaStat(mediaStats.videoSendFrameWidthInput)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendFrameHeightInput'>Sent Frame Height Input</td>
                    <td id='videoSendFrameHeightInputValue'>{displayMediaStat(mediaStats.videoSendFrameHeightInput)}</td>
                </tr>
                
                <tr>
                    <td id='videoSendCodecName'>Send Codec</td>
                    <td id='videoSendCodecNameValue'>{displayMediaStat(mediaStats.videoSendCodecName)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvBitrate'>Received Bitrate</td>
                    <td id='videoRecvBitrateValue'>{displayMediaStat(mediaStats.videoRecvBitrate)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvPackets'>Received Packets</td>
                    <td id='videoRecvPacketsValue'>{displayMediaStat(mediaStats.videoRecvPackets)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvPacketsLost'>Receive Packet Loss</td>
                    <td id='videoRecvPacketsLostValue'>{displayMediaStat(mediaStats.videoRecvPacketsLost)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvJitterBufferMs'>Receive Jitter</td>
                    <td id='videoRecvJitterBufferMsValue'>{displayMediaStat(mediaStats.videoRecvJitterBufferMs)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvPairRtt'>Receive Pair Round-Trip Time</td>
                    <td id='videoRecvPairRttValue'>{displayMediaStat(mediaStats.videoRecvPairRtt)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvFrameRateReceived'>Received Frame Rate</td>
                    <td id='videoRecvFrameRateReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameRateReceived)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvFrameWidthReceived'>Received Width</td>
                    <td id='videoRecvFrameWidthReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameWidthReceived)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvFrameHeightReceived'>Received Height</td>
                    <td id='videoRecvFrameHeightReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameHeightReceived)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvFrameRateOutput'>Received Framerate Output</td>
                    <td id='videoRecvFrameRateOutputValue'>{displayMediaStat(mediaStats.videoRecvFrameRateOutput)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvFrameRateDecoded'>Received Decoded Framerate</td>
                    <td id='videoRecvFrameRateDecodedValue'>{displayMediaStat(mediaStats.videoRecvFrameRateDecoded)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvLongestFreezeDuration'>Received Longest Freeze Duration</td>
                    <td id='videoRecvLongestFreezeDurationValue'>{displayMediaStat(mediaStats.videoRecvLongestFreezeDuration)}</td>
                </tr>
                
                <tr>
                    <td id='videoRecvTotalFreezeDuration'>Received Total Freeze Duration</td>
                    <td id='videoRecvTotalFreezeDurationValue'>{displayMediaStat(mediaStats.videoRecvTotalFreezeDuration)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    ))

    return (<>
        <div>
            <TabList size='small' selectedValue={activeTab} onTabSelect={onTabSelect}>
            <Tab id="misc" value={"misc"}>
                Misc
            </Tab>
            <Tab id="audio" value={"audio"}>
                Audio
            </Tab>
            <Tab id="video" value={"video"}>
                Video
            </Tab>
            </TabList>
        </div>
        <div>
            {activeTab === "misc" && <Misc /> }
            {activeTab === "audio" && <Audio /> }
            {activeTab === "video" && <Video /> }
        </div>
    </>)
}

export default MediaStats;