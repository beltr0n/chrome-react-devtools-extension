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

export enum DiagnosticQuality {
    Good = 1,
    Poor = 2,
    Bad = 3,
    Unknown = 4
}

export interface UserFacingDiagnosticsData {
    //network
    noNetwork: boolean
    networkRelaysNotReachable: boolean
    networkReconnect: DiagnosticQuality
    networkReceiveQuality: DiagnosticQuality
    networkSendQuality: DiagnosticQuality
    //audio
    noSpeakerDevicesEnumerated: boolean
    speakingWhileMicrophoneIsMuted: boolean
    noMicrophoneDevicesEnumerated: boolean
    microphoneNotFunctioning: boolean
    microphoneMuteUnexpectedly: boolean
    microphonePermissionDenied: boolean
    //camera
    cameraFreeze: boolean
    cameraStartFailed: boolean
    cameraStartTimedOut: boolean
    cameraPermissionDenied: boolean
    cameraStoppedUnexpectedly: boolean
    //misc
    screenshareRecordingDisabled: boolean
    capturerStartFailed: boolean
    capturerStoppedUnexpectedly: boolean
}

export interface UserFacingDiagnosticsProps {
    data: UserFacingDiagnosticsData
}

const useStyles = makeStyles({
    propsTable: {
      "& td:first-child": {
        fontWeight: tokens.fontWeightSemibold,
      },
      "& td": {
        ...shorthands.padding(0, "30px", 0, 0),
      },
      "& td.good": {
        color: 'green'
      },
      "& td.poor": {
        color: 'yellow'
      },
      "& td.bad": {
        color: 'red'
      }
    },
});

function UserFacingDiagnostics(props: UserFacingDiagnosticsProps) {
    const styles = useStyles();
    const generalStats = props.data;
    const renderTable = () => {
        return Object.keys(generalStats).map((key) => {
            const value: boolean | DiagnosticQuality = (generalStats as any)[key];
            let output: string = '';
            if(typeof value === "boolean") {
                output = value ? "true" : "false";
            }
            else {
                if(value.toString() in DiagnosticQuality) {
                    switch(value) {
                        case DiagnosticQuality.Bad:
                            output = "Bad";
                            break;
                        case DiagnosticQuality.Good:
                            output = "Good";
                            break;
                        case DiagnosticQuality.Poor:
                            output = "Poor";
                            break;
                        default:
                            output = "Unknown";
                            break;
                    }
                }
            }

            return (
            <tr>
                <td>{key}</td>
                <td className={output.toLowerCase()}>{output}</td>
            </tr>)
        });
    }

    return (
        <table id="ufdStatsTable" className={styles.propsTable}>
            <tbody>
                {renderTable()}     
            </tbody>
        </table>
    )
    
}

export default UserFacingDiagnostics;