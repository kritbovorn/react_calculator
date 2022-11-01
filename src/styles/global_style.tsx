import { StyleSheet } from "react-native";
import { myColors } from "./colors";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnDark: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnLight: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnGray: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: myColors.gray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    }, 
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    rowLeft: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 32,
        marginTop: 20
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row",
    },
    viewBottom: {
        position: "absolute",
        bottom: 20,
    },
    screenFirstNumber: {
        fontSize: 80,
        color: myColors.gray,
        fontWeight: "200",
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 35,
        color: myColors.gray,
        fontWeight: "200",
        alignSelf: "flex-end",
    }
});