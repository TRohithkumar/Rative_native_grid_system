import { StyleSheet, Platform } from "react-native";
import {
  colorTextSecondary,
  colorDisabled,
  colorWhite,
  colorDanger,
  colorSuccess
} from "../../../../assets/styles/style";

export const styles = {
  // Flex

  flex: {
    one: {
      flex: 1
    },
    two: {
      flex: 1
    },
    three: {
      flex: 1
    },
    four: {
      flex: 1
    },
    five: {
      flex: 1
    },
    six: {
      flex: 1
    },
    eight: {
      flex: 1
    },
    nine: {
      flex: 1
    }
  },

  // Content Direction
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },

  // margin
  m6: {
    margin: 6
  },
  m12: {
    margin: 12
  },

  padding: {
    xs: {
      padding: 2
    },
    xSMyXS: {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 12,
      paddingBottom: 12
    },
    sm: {
      padding: 6
    },
    xsm: {
      paddingLeft: 6,
      paddingRight: 6
    },
    xxs: {
      paddingLeft: 4,
      paddingRight: 4
    },
    md: {
      padding: 12
    },
    lg: {
      padding: 16
    },
    xlg: {
      padding: 18
    },
    xmd: {
      paddingTop: 12,
      paddingBottom: 12
    },
    ysm: {
      paddingTop: 6,
      paddingBottom: 6
    },
    ymd: {
      paddingTop: 12,
      paddingBottom: 12
    }
  },
  margin: {
    xs: {
      margin: 4
    },
    xsTop: {
      marginTop: 2
    },
    sm: {
      margin: 6
    },
    xsm: {
      marginLeft: 6,
      marginRight: 6
    },
    smTop: {
      marginTop: 6
    },
    ysm: {
      marginTop: 2,
      marginBottom: 2
    },
    yxs: {
      marginTop: 6,
      marginBottom: 6
    },
    ymd: {
      marginTop: 12,
      marginBottom: 12
    },
    xmd: {
      marginLeft: 12,
      marginRight: 12
    },
    md: {
      margin: 12
    }
  },

  // Align items

  alignContent: {
    center: {
      alignContent: "center"
    },
    flexEnd: {
      alignContent: "flex-end"
    },
    flexStart: {
      alignContent: "flex-start"
    },
    spaceAround: {
      alignContent: "space-around"
    },
    spaceBetween: {
      alignContent: "space-between"
    },
    stretch: {
      alignContent: "stretch"
    }
  },

  alignItems: {
    center: {
      alignItems: "center"
    },
    flexEnd: {
      alignItems: "flex-end"
    },
    flexStart: {
      alignItems: "flex-start"
    },
    spaceAround: {
      alignItems: "space-around"
    },
    spaceBetween: {
      alignItems: "space-between"
    },
    stretch: {
      alignItems: "stretch"
    }
  },

  justify: {
    center: {
      justifyContent: "center"
    },
    flexEnd: {
      justifyContent: "flex-end"
    },
    flexStart: {
      justifyContent: "flex-start"
    },
    spaceAround: {
      justifyContent: "space-around"
    },
    spaceBetween: {
      justifyContent: "space-between"
    },
    spaceEvenly: {
      justifyContent: "space-evenly"
    }
  },

  // Align self

  alignSelf: {
    center: {
      alignSelf: "center"
    },
    flexEnd: {
      alignSelf: "flex-end"
    },
    flexStart: {
      alignSelf: "flex-start"
    },
    auto: {
      alignSelf: "auto"
    },
    baseline: {
      alignSelf: "baseline"
    },
    stretch: {
      alignSelf: "stretch"
    }
  },

  border: {
    xs: {
      borderWidth: 0.6,
      borderColor: colorDisabled
    },
    xxs: {
      borderRightWidth: 0.6,
      borderRightColor: colorDisabled
    },
    sm: {
      borderWidth: 1,
      borderColor: colorDisabled
    },
    md: {
      borderWidth: 1.3,
      borderColor: colorDisabled
    },
    topXs: {
      borderTopWidth: 1,
      borderTopColor: colorDisabled
    },
    bottomXs: {
      borderBottomWidth: 1,
      borderBottomColor: colorDisabled
    },
    bottom: {
      borderBottomWidth: 1.1,
      borderBottomColor: colorDisabled
    },
    top: {
      borderTopWidth: 1.3,
      borderTopColor: colorDisabled
    },
    right: {
      borderRightWidth: 1.3,
      borderRightColor: colorDisabled
    }
  },

  // Background
  background: {
    white: {
      backgroundColor: colorWhite
    },
    transparent: {
      backgroundColor: "transparent"
    },
    grey: {
      backgroundColor: colorDisabled
    },
    danger: {
      backgroundColor: colorDanger
    },
    success: {
      backgroundColor: colorSuccess
    }
  },

  // Position
  position: {
    bottom: {
      flex: 1,
      padding: 0,
      margin: 0,
      left: 0,
      right: 0,
      position: "absolute",
      bottom: 0
    },
    top: {
      flex: 1,
      padding: 0,
      margin: 0,
      left: 0,
      right: 0,
      top: Platform.OS === "ios" ? 40 : 0,
      position: "absolute"
    }
  },
  elevation: {
    sm: {
      shadowOffset: {
        width: 0.6,
        height: 0.4
      },
      shadowOpacity: 0.7,
      shadowRadius: 1,
      elevation: 2
    },
    md: {
      shadowOffset: {
        width: 0.6,
        height: 0.4
      },
      shadowOpacity: 0.7,
      shadowRadius: 1,
      elevation: 2
    },
  },
  round: {
    sm: {
      borderRadius: 200,
      width: 38,
      height: 38
    },
    md: {
      borderRadius: 200,
      width: 42,
      height: 42
    },
  }
};
