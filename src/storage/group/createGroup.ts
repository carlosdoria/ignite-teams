import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

export const createGroup = async (newGroup: string) => {
  try {
    const storedGroups = await getAllGroups(newGroup);

    const groups = [...storedGroups, newGroup];

    const newStorage = JSON.stringify(groups);

    await AsyncStorage.setItem(GROUP_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
};
