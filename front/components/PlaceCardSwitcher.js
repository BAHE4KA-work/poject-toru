import React, { useState } from 'react';
import { View } from 'react-native';
import PlaceCard from './PlaceCard';
import PlaceReviewCard from './PlaceReviewCard';

export default function PlaceCardSwitcher({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);

  return (
    <View>
      {isExpanded ? (
        <PlaceReviewCard onClose={handleCollapse} data={data} />
      ) : (
        <PlaceCard data={data} onPress={handleExpand} />
      )}
    </View>
  );
}
