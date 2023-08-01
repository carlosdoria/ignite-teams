import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllGroups } from "./getAllGroups";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "@storage/player/getPlayersByGroup";

export const removeGroupByName = async (deletedGroup: string) => {
  try {
    const storedGroups = await getAllGroups();

    const storageFiltered = storedGroups.filter(
      (storaredGroup) => storaredGroup !== deletedGroup
    );

    const newGroups = JSON.stringify(storageFiltered);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deletedGroup}`);
  } catch (error) {
    throw error;
  }
};
