import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Заменили на react-native-vector-icons
import Colors from "../components/constants/colors"; // Путь к цветам

const PlaceCardGame = ({ place }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Text key={i} style={styles.starFilled}>★</Text>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Text key={i} style={styles.starHalf}>★</Text>);
      } else {
        stars.push(<Text key={i} style={styles.starEmpty}>★</Text>);
      }
    }

    return stars;
  };

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <View key={index} style={styles.tag}>
        <Text style={styles.tagText}>{tag.name}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: place.imageUrl }} style={styles.image} />
        <View style={styles.weatherBadge}>
          <Text style={styles.weatherText}>{place.weather.temperature}</Text>
          <Icon name="cloud-outline" size={16} color="#f5a623" style={styles.weatherIcon} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{place.name}</Text>

        <View style={styles.tagsContainer}>
          {renderTags(place.tags)}
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingNumber}>{place.rating.toFixed(1)}</Text>
          <View style={styles.starsContainer}>
            {renderStars(place.rating)}
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="checkmark-outline" size={20} color={Colors.primary} />
          <Text style={styles.actionButtonText}>{place.actionText}</Text>
        </TouchableOpacity>

        <Text style={styles.address}>{place.address}</Text>

        <TouchableOpacity style={styles.expandButton}>
          <Text style={styles.expandButtonText}>Развернуть</Text>
          <Icon name="chevron-down-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    position: "relative",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  weatherBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  weatherText: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 4,
  },
  weatherIcon: {
    marginLeft: 2,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    fontSize: 14,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingNumber: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: "row",
  },
  starFilled: {
    color: "#f5a623",
    fontSize: 20,
  },
  starHalf: {
    color: "#f5a623",
    fontSize: 20,
    opacity: 0.7,
  },
  starEmpty: {
    color: "#e0e0e0",
    fontSize: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 16,
    justifyContent: "center",
  },
  actionButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    lineHeight: 20,
  },
  expandButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  expandButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
});

export default PlaceCardGame;
