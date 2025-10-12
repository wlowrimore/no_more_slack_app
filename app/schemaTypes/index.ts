import { postType } from "./postType";
import { userProgress } from "./userProgress";
import { article } from "./article";
import userPreferences from "./userPreferences";
import headline from "./headline";
import widgetData from "./widgetData";
import constitutionalDocument from "./constitutionalDocument";
import politicalData from "./politicalData";
import votingInfo from "./votingInfo";

export const schemaTypes = [
  votingInfo,
  politicalData,
  constitutionalDocument,
  widgetData,
  headline,
  userPreferences,
  postType,
  userProgress,
  article,
];
