import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllGroups = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(group);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
};
