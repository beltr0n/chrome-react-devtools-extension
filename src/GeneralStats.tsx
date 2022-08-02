export interface GeneralStatsData {
    callId: string
    participantId?: string
    remoteParticipants?: string[]
    dominantSpeakers?: string[]
    isRecording: string
    isTranscribing?: string
    isScreenSharing?: boolean
    chosenCamera?: string
    chosenMicrophone?: string
    userInfo?: string
    browser?: string
}

interface GeneralStatsProps {
    data: GeneralStatsData,
    visibility: boolean
}

function GeneralStats(props: GeneralStatsProps) {
    const generalStats = props.data;

    const renderList = (participantList: string[] | undefined) => {
        if(participantList && participantList.length > 0) {
            return participantList.map((value) => {
                <li>{value}</li>
            });
        }
        else {
            return <li>"Not Available"</li>
        }
    }

    return (
    <dl style={{visibility: props.visibility ? "visible" : "hidden"}} id="generalStatsTable">
        <dt id='callId'>Call Id</dt>
        <dd id='callIdValue'>{generalStats.callId}</dd>
        <dt id='participantId'>Participant Id</dt>
        <dd id='participantIdValue'>{generalStats.participantId}</dd>
        <dt id='remoteParticipants'>Remote Participants</dt>
        <dd id='remoteParticipantsValue'><ul>{renderList(generalStats.remoteParticipants)}</ul></dd>
        <dt id='dominantSpeakers'>Dominant Speaker Ids</dt>
        <dd id='dominantSpeakersValue'><ul>{renderList(generalStats.dominantSpeakers)}</ul></dd>
        <dt id='isRecording'>Is Recording</dt>
        <dd id='isRecordingValue'>{generalStats.isRecording}</dd>
        <dt id='isTranscribing'>Is Transcribing</dt>
        <dd id='isTranscribingValue'>{generalStats.isTranscribing}</dd>
        <dt id='isScreenSharing'>Is Screen Sharing</dt>
        <dd id='isScreenSharingValue'>{generalStats.isScreenSharing}</dd>
        <dt id='chosenCamera'>Chosen Camera</dt>
        <dd id='chosenCameraValue'>{generalStats.chosenCamera}</dd>
        <dt id='chosenMicrophone'>Chosen Microphone</dt>
        <dd id='chosenMicrophoneValue'>{generalStats.chosenMicrophone}</dd>
        <dt id='userInfo'>User Info</dt>
        <dd id='userInfoValue'>{generalStats.userInfo}</dd>
    </dl>
    )
}

export default GeneralStats;