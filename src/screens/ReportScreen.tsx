import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import {
  loadMatchEvents,
} from "../services/loadMatch";

import {
  extractFeatures,
} from "../services/featureExtractor";

export default function ReportScreen() {
  const [loading, setLoading] =
    useState(true);

  const [report, setReport] =
    useState<any>(null);

  useEffect(() => {
    generateReport();
  }, []);

  async function generateReport() {
    try {
      const events =
        await loadMatchEvents(
          "1694390"
        );

      const features =
        extractFeatures(events);

      setReport(features);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:
            "center",
          alignItems:
            "center",
        }}
      >
        <ActivityIndicator
          size="large"
        />

        <Text>
          Analyzing Match...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Match Analysis
      </Text>

      <Text>
        Total Passes:
        {report.totalPasses}
      </Text>

      <Text>
        Successful Passes:
        {report.successfulPasses}
      </Text>

      <Text>
        Total Shots:
        {report.totalShots}
      </Text>

      <Text>
        Total Duels:
        {report.totalDuels}
      </Text>

      <Text>
        Total Saves:
        {report.totalSaves}
      </Text>

      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Key Moments
      </Text>

      {report.keyMoments.map(
        (
          item: string,
          index: number
        ) => (
          <Text key={index}>
            • {item}
          </Text>
        )
      )}
    </ScrollView>
  );
}