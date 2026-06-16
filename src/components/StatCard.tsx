import { View, Text } from "react-native";

type Props = {
  title: string;
  value: number;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 16,
        borderRadius: 12,
        width: 150,
      }}
    >
      <Text>{title}</Text>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          marginTop: 6,
        }}
      >
        {value}
      </Text>
    </View>
  );
}