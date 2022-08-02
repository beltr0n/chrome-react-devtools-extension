export interface MediaStatsDataValue {
    timestamp: Date
    value: string | number
    unit: string
}
  
export interface MediaStatsData {
    sentBWEstimate?: MediaStatsDataValue[]
    sentBWEstimateValue?: MediaStatsDataValue[]
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
    visibility: boolean
}

function MediaStats(props: MediaStatsProps) {
    const mediaStats:MediaStatsData = props.data;

    const displayMediaStat = (mediaStatsValues: MediaStatsDataValue[] | undefined) => {
        if(!mediaStatsValues) {
            return '-';
        }
        const mediaStatsValue = mediaStatsValues[mediaStatsValues.length - 1];
        const value = typeof mediaStatsValue.value === 'number' ? Math.round(mediaStatsValue.value as number) : mediaStatsValue.value;
        const unit = mediaStatsValue.unit === 'None' ? '' : mediaStatsValue.unit
        return value + unit;
    }

    return (
        <dl style={{visibility: props.visibility ? "visible" : "hidden"}} id="mediaStatsTable">
            <dt className='sectionHeader'>Bandwidth</dt>
            <dd className='sectionHeader'><a href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/media-quality-sdk#bandwidth-metrics" target="_blank">Learn more</a></dd>
            
            <dt id='sentBWEstimate'>Sent Bandwidth Estimate</dt>
            <dd id='sentBWEstimateValue'>{displayMediaStat(mediaStats.sentBWEstimate)}</dd>
            
            <dt className='sectionHeader'>Audio</dt>
            <dd className='sectionHeader'><a href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/media-quality-sdk#audio-quality-metrics" target="_blank">Learn more</a></dd>
            
            <dt id='audioSendBitrate'>Send Bitrate</dt>
            <dd id='audioSendBitrateValue'>{displayMediaStat(mediaStats.audioSendBitrate)}</dd>
            
            <dt id='audioSendPackets'>Sent Packets</dt>
            <dd id='audioSendPacketsValue'>{displayMediaStat(mediaStats.audioSendPackets)}</dd>
            
            <dt id='audioSendPacketsLost'>Lost Send Packets</dt>
            <dd id='audioSendPacketsLostValue'>{displayMediaStat(mediaStats.audioSendPacketsLost)}</dd>
            
            <dt id='audioSendCodecName'>Send codec</dt>
            <dd id='audioSendCodecNameValue'>{displayMediaStat(mediaStats.audioSendCodecName)}</dd>
            
            <dt id='audioSendRtt'>Send Round-Trip Time</dt>
            <dd id='audioSendRttValue'>{displayMediaStat(mediaStats.audioSendRtt)}</dd>
            
            <dt id='audioSendPairRtt'>Send Pair Round-Trip Time</dt>
            <dd id='audioSendPairRttValue'>{displayMediaStat(mediaStats.audioSendPairRtt)}</dd>
            
            <dt id='audioSendAudioInputLevel'>Microphone Input Level</dt>
            <dd id='audioSendAudioInputLevelValue'>{displayMediaStat(mediaStats.audioSendAudioInputLevel)}</dd>
            
            <dt id='audioRecvBitrate'>Receive Bitrate</dt>
            <dd id='audioRecvBitrateValue'>{displayMediaStat(mediaStats.audioRecvBitrate)}</dd>
            
            <dt id='audioRecvJitterBufferMs'>Receive Jitter</dt>
            <dd id='audioRecvJitterBufferMsValue'>{displayMediaStat(mediaStats.audioRecvJitterBufferMs)}</dd>
            
            <dt id='audioRecvPacketsLost'>Lost Receive Packets</dt>
            <dd id='audioRecvPacketsLostValue'>{displayMediaStat(mediaStats.audioRecvPacketsLost)}</dd>
            
            <dt id='audioRecvPackets'>Received packets</dt>
            <dd id='audioRecvPacketsValue'>{displayMediaStat(mediaStats.audioRecvPackets)}</dd>
            
            <dt id='audioRecvPairRtt'>Receive Pair Round-Trip Time</dt>
            <dd id='audioRecvPairRttValue'>{displayMediaStat(mediaStats.audioRecvPairRtt)}</dd>
            
            <dt id='audioRecvAudioOutputLevel'>Speaker Output Level</dt>
            <dd id='audioRecvAudioOutputLevelValue'>{displayMediaStat(mediaStats.audioRecvAudioOutputLevel)}</dd>
            
            <dt className='sectionHeader'>Video</dt>
            <dd className='sectionHeader'><a href="https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/media-quality-sdk#video-quality-metrics" target="_blank">Learn more</a></dd>
            
            <dt id='videoSendFrameRateSent'>Sent Frame Rate</dt>
            <dd id='videoSendFrameRateSentValue'>{displayMediaStat(mediaStats.videoSendFrameRateSent)}</dd>
            
            <dt id='videoSendFrameWidthSent'>Sent Width</dt>
            <dd id='videoSendFrameWidthSentValue'>{displayMediaStat(mediaStats.videoSendFrameWidthSent)}</dd>
            
            <dt id='videoSendFrameHeightSent'>Sent Height</dt>
            <dd id='videoSendFrameHeightSentValue'>{displayMediaStat(mediaStats.videoSendFrameHeightSent)}</dd>
            
            <dt id='videoSendBitrate'>Send Bitrate</dt>
            <dd id='videoSendBitrateValue'>{displayMediaStat(mediaStats.videoSendBitrate)}</dd>
            
            <dt id='videoSendPackets'>Sent Packets</dt>
            <dd id='videoSendPacketsValue'>{displayMediaStat(mediaStats.videoSendPackets)}</dd>
            
            <dt id='videoSendRtt'>Send Round-Trip Time</dt>
            <dd id='videoSendRttValue'>{displayMediaStat(mediaStats.videoSendRtt)}</dd>
            
            <dt id='videoSendPairRtt'>Send Pair Round-Trip Time</dt>
            <dd id='videoSendPairRttValue'>{displayMediaStat(mediaStats.videoSendPairRtt)}</dd>
            
            <dt id='videoSendPacketsLost'>Send Packet Loss</dt>
            <dd id='videoSendPacketsLostValue'>{displayMediaStat(mediaStats.videoSendPacketsLost)}</dd>
            
            <dt id='videoSendFrameRateInput'>Sent Framerate Input</dt>
            <dd id='videoSendFrameRateInputValue'>{displayMediaStat(mediaStats.videoSendFrameRateInput)}</dd>
            
            <dt id='videoSendFrameWidthInput'>Sent Frame Width Input</dt>
            <dd id='videoSendFrameWidthInputValue'>{displayMediaStat(mediaStats.videoSendFrameWidthInput)}</dd>
            
            <dt id='videoSendFrameHeightInput'>Sent Frame Height Input</dt>
            <dd id='videoSendFrameHeightInputValue'>{displayMediaStat(mediaStats.videoSendFrameHeightInput)}</dd>
            
            <dt id='videoSendCodecName'>Send Codec</dt>
            <dd id='videoSendCodecNameValue'>{displayMediaStat(mediaStats.videoSendCodecName)}</dd>
            
            <dt id='videoRecvBitrate'>Received Bitrate</dt>
            <dd id='videoRecvBitrateValue'>{displayMediaStat(mediaStats.videoRecvBitrate)}</dd>
            
            <dt id='videoRecvPackets'>Received Packets</dt>
            <dd id='videoRecvPacketsValue'>{displayMediaStat(mediaStats.videoRecvPackets)}</dd>
            
            <dt id='videoRecvPacketsLost'>Receive Packet Loss</dt>
            <dd id='videoRecvPacketsLostValue'>{displayMediaStat(mediaStats.videoRecvPacketsLost)}</dd>
            
            <dt id='videoRecvJitterBufferMs'>Receive Jitter</dt>
            <dd id='videoRecvJitterBufferMsValue'>{displayMediaStat(mediaStats.videoRecvJitterBufferMs)}</dd>
            
            <dt id='videoRecvPairRtt'>Receive Pair Round-Trip Time</dt>
            <dd id='videoRecvPairRttValue'>{displayMediaStat(mediaStats.videoRecvPairRtt)}</dd>
            
            <dt id='videoRecvFrameRateReceived'>Received Frame Rate</dt>
            <dd id='videoRecvFrameRateReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameRateReceived)}</dd>
            
            <dt id='videoRecvFrameWidthReceived'>Received Width</dt>
            <dd id='videoRecvFrameWidthReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameWidthReceived)}</dd>
            
            <dt id='videoRecvFrameHeightReceived'>Received Height</dt>
            <dd id='videoRecvFrameHeightReceivedValue'>{displayMediaStat(mediaStats.videoRecvFrameHeightReceived)}</dd>
            
            <dt id='videoRecvFrameRateOutput'>Received Framerate Output</dt>
            <dd id='videoRecvFrameRateOutputValue'>{displayMediaStat(mediaStats.videoRecvFrameRateOutput)}</dd>
            
            <dt id='videoRecvFrameRateDecoded'>Received Decoded Framerate</dt>
            <dd id='videoRecvFrameRateDecodedValue'>{displayMediaStat(mediaStats.videoRecvFrameRateDecoded)}</dd>
            
            <dt id='videoRecvLongestFreezeDuration'>Received Longest Freeze Duration</dt>
            <dd id='videoRecvLongestFreezeDurationValue'>{displayMediaStat(mediaStats.videoRecvLongestFreezeDuration)}</dd>
            
            <dt id='videoRecvTotalFreezeDuration'>Received Total Freeze Duration</dt>
            <dd id='videoRecvTotalFreezeDurationValue'>{displayMediaStat(mediaStats.videoRecvTotalFreezeDuration)}</dd>
    </dl>
    )
}

export default MediaStats;