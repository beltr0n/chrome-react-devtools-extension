import {
    makeStyles,
    shorthands,
    tokens
} from "@fluentui/react-components";

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
    data: GeneralStatsData
}

const useStyles = makeStyles({
    propsTable: {
      "& td:first-child": {
        fontWeight: tokens.fontWeightSemibold,
      },
      "& td": {
        ...shorthands.padding(0, "30px", 0, 0),
      },
    },
});

function GeneralStats(props: GeneralStatsProps) {
    const generalStats = props.data;

    const styles = useStyles();

    const renderList = (participantList: string[] | undefined) => {
        if(participantList && participantList.length > 0) {
            return participantList.map((value) => {
                return <li>{value}</li>
            });
        }
        else {
            return <li>"Not Available"</li>
        }
    }

    return (
        <table id="generalStatsTable" className={styles.propsTable}>
            <tbody>
                <tr>
                    <td>Call Id</td>
                    <td>{generalStats.callId}</td>
                </tr>
                <tr>
                    <td id='participantId'>Participant Id</td>
                    <td id='participantIdValue'>{generalStats.participantId}</td>
                </tr>
                <tr>
                    <td id='remoteParticipants'>Remote Participants</td>
                    <td id='remoteParticipantsValue'><ul>{renderList(generalStats.remoteParticipants)}</ul></td>
                </tr>
                <tr>
                    <td id='dominantSpeakers'>Dominant Speaker Ids</td>
                    <td id='dominantSpeakersValue'><ul>{renderList(generalStats.dominantSpeakers)}</ul></td>
                </tr>
                <tr>
                    <td id='isRecording'>Is Recording</td>
                    <td id='isRecordingValue'>{generalStats.isRecording}</td>
                </tr>
                <tr>
                    <td id='isTranscribing'>Is Transcribing</td>
                    <td id='isTranscribingValue'>{generalStats.isTranscribing}</td>
                </tr>
                <tr>
                    <td id='isScreenSharing'>Is Screen Sharing</td>
                    <td id='isScreenSharingValue'>{generalStats.isScreenSharing}</td>
                </tr>
                <tr>
                    <td id='chosenCamera'>Chosen Camera</td>
                    <td id='chosenCameraValue'>{generalStats.chosenCamera}</td>
                </tr>
                <tr>
                    <td id='chosenMicrophone'>Chosen Microphone</td>
                    <td id='chosenMicrophoneValue'>{generalStats.chosenMicrophone}</td>
                </tr>
                <tr>
                    <td id='userInfo'>User Info</td>
                    <td id='userInfoValue'>{generalStats.userInfo}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GeneralStats;