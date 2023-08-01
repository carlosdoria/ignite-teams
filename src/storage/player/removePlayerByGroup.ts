import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";

export const removePlayerByGroup = async (player: string, group: string) => {
  try {
    const storage = await getPlayersByGroup(group);

    const filteredPlayers = storage?.filter(
      (storagePlayer) => storagePlayer.name !== player
    );

    const newPlayers = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newPlayers);
  } catch (error) {
    throw error;
  }
};
