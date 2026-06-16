import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { generateAIReport } from "../services/llm";
import { buildPrompt } from "../services/reportGenerator";

import StatCard from "../components/StatCard";

export default function ReportScreen() {
  const { matchId } = useLocalSearchParams();

  const [loading, setLoading] = useState(true);

  const [aiReport, setAiReport] =
    useState("");

  const [stats, setStats] = useState({
    passes: 0,
    shots: 0,
    duels: 0,
    saves: 0,
    successfulPasses: 0,
    failedPasses: 0,
    goals: 0,
    yellowCards: 0,
    redCards: 0,
  });

  useEffect(() => {
    loadMatchData();
  }, []);

  const loadMatchData = async () => {
    try {
      let matchData: any;

      if (matchId === "1694390") {
        matchData = await import(
          "../../assets/data/events/1694390.json"
        );
      } else if (matchId === "1694391") {
        matchData = await import(
          "../../assets/data/events/1694391.json"
        );
      } else {
        matchData = await import(
          "../../assets/data/events/1694392.json"
        );
      }

      const data =
        matchData.default || matchData;

      const events = data.events || [];

      const successfulPasses =
        events.filter(
          (e: any) =>
            e.eventName === "Pass" &&
            e.tags?.some(
              (t: any) => t.id === 1801
            )
        ).length;

      const failedPasses =
        events.filter(
          (e: any) =>
            e.eventName === "Pass" &&
            e.tags?.some(
              (t: any) => t.id === 1802
            )
        ).length;

      const goals = events.filter(
        (e: any) =>
          e.eventName === "Shot" &&
          e.tags?.some(
            (t: any) => t.id === 101
          )
      ).length;

      const yellowCards =
        events.filter(
          (e: any) =>
            e.tags?.some(
              (t: any) => t.id === 1702
            )
        ).length;

      const redCards =
        events.filter(
          (e: any) =>
            e.tags?.some(
              (t: any) => t.id === 1701
            )
        ).length;

      const passes = events.filter(
        (e: any) =>
          e.eventName === "Pass"
      ).length;

      const shots = events.filter(
        (e: any) =>
          e.eventName === "Shot"
      ).length;

      const duels = events.filter(
        (e: any) =>
          e.eventName === "Duel"
      ).length;

      const saves = events.filter(
        (e: any) =>
          e.eventName ===
          "Save attempt"
      ).length;

      setStats({
        passes,
        shots,
        duels,
        saves,
        successfulPasses,
        failedPasses,
        goals,
        yellowCards,
        redCards,
      });

      const prompt = buildPrompt({
        passes,
        successfulPasses,
        failedPasses,
        shots,
        goals,
        duels,
        saves,
        yellowCards,
        redCards,
      });

      const report =
        await generateAIReport(
          prompt
        );

      setAiReport(report);
    } catch (error) {
      console.log(error);

      setAiReport(
        "Unable to generate AI report."
      );
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size="large"
        />

        <Text
          style={{
            marginTop: 10,
          }}
        >
          Analyzing Events...
        </Text>

        <Text
          style={{
            marginTop: 5,
          }}
        >
          Generating AI Report...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F5F7FA",
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          ⚽ Match Report
        </Text>

        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Argentina vs France
          </Text>

          <Text
            style={{
              color: "#666",
              marginTop: 4,
            }}
          >
            FIFA World Cup Match
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 20,
            }}
          >
            <StatCard
              title="Passes"
              value={stats.passes}
              color="#EEF2FF"
            />

            <StatCard
              title="Shots"
              value={stats.shots}
              color="#DCFCE7"
            />

            <StatCard
              title="Duels"
              value={stats.duels}
              color="#FEF3C7"
            />

            <StatCard
              title="Saves"
              value={stats.saves}
              color="#FCE7F3"
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            padding: 20,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            📊 Match Insights
          </Text>

          <Text style={{ marginTop: 12 }}>
            Successful Passes: {stats.successfulPasses}
          </Text>

          <Text>
            Failed Passes: {stats.failedPasses}
          </Text>

          <Text>
            Goals: {stats.goals}
          </Text>

          <Text>
            Yellow Cards: {stats.yellowCards}
          </Text>

          <Text>
            Red Cards: {stats.redCards}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            padding: 20,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            🤖 AI Match Report
          </Text>

          <Text
            style={{
              color: "#888",
              marginTop: 10,
            }}
          >
            Generated:
            {" "}
            {new Date().toLocaleString()}
          </Text>

          <Text
            style={{
              marginTop: 15,
              lineHeight: 28,
              fontSize: 16,
            }}
          >
            {aiReport}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            alert(
              "Export feature coming soon"
            )
          }
          style={{
            backgroundColor: "#2563EB",
            marginTop: 20,
            padding: 16,
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
            📥 Export Report
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}