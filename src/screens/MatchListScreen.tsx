import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { getMatches } from "../services/dataset";

export default function MatchListScreen({
  navigation,
}: any) {
  const matches = getMatches();

  return (
    <FlatList
      data={matches}
      keyExtractor={(item: any) =>
        item.wyId.toString()
      }
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              "Report",
              {
                matchId: item.wyId,
              }
            )
          }
        >
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
            }}
          >
            <Text>
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}