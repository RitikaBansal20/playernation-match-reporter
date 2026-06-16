import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const matches = [
  {
    id: "1694390",
    home: "🇦🇷 Argentina",
    away: "🇫🇷 France",
    score: "3 - 2",
    shots: 22,
    passes: 780,
  },
  {
    id: "1694391",
    home: "🇧🇷 Brazil",
    away: "🇧🇪 Belgium",
    score: "2 - 1",
    shots: 18,
    passes: 640,
  },
  {
    id: "1694392",
    home: "🇩🇪 Germany",
    away: "🇸🇪 Sweden",
    score: "2 - 0",
    shots: 15,
    passes: 590,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F5F7FA",
      }}
    >
      <View
        style={{
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "700",
          }}
        >
          ⚽ PlayerNation
        </Text>

        <Text
          style={{
            color: "#64748B",
            marginTop: 8,
            marginBottom: 30,
            fontSize: 18,
          }}
        >
          AI Powered Football Match Analysis
        </Text>

        {matches.map((match) => (
          <TouchableOpacity
            key={match.id}
            onPress={() =>
              router.push({
                pathname: "/report",
                params: {
                  matchId: match.id,
                },
              })
            }
            style={{
              backgroundColor: "#FFFFFF",
              padding: 24,
              borderRadius: 20,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              {match.home}
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginTop: 5,
              }}
            >
              {match.away}
            </Text>

            <View
              style={{
                marginTop: 15,
                alignSelf: "flex-start",
                backgroundColor: "#E0E7FF",
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                Final Score: {match.score}
              </Text>
            </View>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <Text>⚽ Shots: {match.shots}</Text>
              <Text>🎯 Passes: {match.passes}</Text>
              <Text>🏆 FIFA World Cup</Text>
            </View>

            <View
              style={{
                marginTop: 18,
                backgroundColor: "#2563EB",
                padding: 14,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Generate AI Report
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}