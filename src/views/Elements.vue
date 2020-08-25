<template>
  <div class="elements">
    <v-container
      v-for="type in cardTypes"
      :key="type"
      class="grey lighten-4"
      fluid
    >
      <v-subheader>{{ type }}</v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
          <v-card>
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4"
                v-text="card.title"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <CardCenterLoader />
    </v-container>
    <v-container>
      <CardHoverMusic />
    </v-container>
    <v-container>
      <CardHoverOverlay />
    </v-container>
    <v-container>
      <CardHoverPrice />
    </v-container>
    <v-container>
      <CardOverlay />
    </v-container>
    <v-container>
      <CardRating />
    </v-container>
    <v-container>
      <ChipCardFilter />
    </v-container>
    <v-container>
      <ChipCardShirt />
    </v-container>
    <v-container>
      <ChipCardToothbrush />
    </v-container>
    <v-container>
      <CircularLoader />
    </v-container>
    <v-container>
      <ColorPicker />
    </v-container>
    <v-container>
      <FilterChips />
    </v-container>
    <v-container>
      <GroupSlider />
    </v-container>
    <v-container>
      <IconChips />
    </v-container>
    <v-container>
      <LoadingDialogue />
    </v-container>
    <v-container>
      <OppositeSlotTimeline />
    </v-container>
    <v-container>
      <ProgressBarLinearStream />
    </v-container>
    <v-container>
      <ProgressCircular />
    </v-container>
    <v-container>
      <TimelineCards />
    </v-container>
    <v-container>
      <TimelineOppositeSlot />
    </v-container>
    <v-container>
      <TimelineLogger />
    </v-container>
    <v-container>
      <TimelineInCard />
    </v-container>
    <v-container>
      <Overlay />
    </v-container>
    <v-container>
      <CardOverlay />
    </v-container>
    <v-container>
      <CardHoverOverlay />
    </v-container>
    <v-container>
      <LoaderOverlay />
    </v-container>
    <v-container>
      <AdvancedTimeline />
    </v-container>
  </div>
</template>
<script>
import AdvancedTimeline from "@/components/Elements/AdvancedTimeline.vue";
import CardCenterLoader from "@/components/Elements/CardCenterLoader.vue";
import CardHoverMusic from "@/components/Elements/CardHoverMusic.vue";
import CardHoverPrice from "@/components/Elements/CardHoverPrice.vue";
import CardOverlay from "@/components/Elements/CardOverlay.vue";
import CardHoverOverlay from "@/components/Elements/CardHoverOverlay.vue";
import CardRating from "@/components/Elements/RatingCard.vue";
import ChipCardFilter from "@/components/Elements/ChipCardFilter.vue";
import ChipCardShirt from "@/components/Elements/ChipCardShirt.vue";
import ChipCardToothbrush from "@/components/Elements/ChipCardToothbrush.vue";
import CircularLoader from "@/components/Elements/CircularLoader.vue";
import ColorPicker from "@/components/Elements/ColorPicker.vue";
import FilterChips from "@/components/Elements/FilterChips.vue";
import GroupSlider from "@/components/Elements/GroupSlider.vue";
import IconChips from "@/components/Elements/IconChips.vue";
import LoaderOverlay from "@/components/Elements/LoaderOverlay.vue";
import LoadingDialogue from "@/components/Elements/LoadingDialogue.vue";
import OppositeSlotTimeline from "@/components/Elements/OppositeSlotTimeline.vue";
import Overlay from "@/components/Elements/Overlays.vue";
import ProgressBarLinearStream from "@/components/Elements/ProgressBarLinearStream.vue";
import ProgressCircular from "@/components/Elements/ProgressCircular.vue";
import TimelineInCard from "@/components/Elements/TimelineInCard.vue";
import TimelineLogger from "@/components/Elements/TimelineLogger.vue";
import TimelineOppositeSlot from "@/components/Elements/OppositeSlotTimeline.vue";
import TimelineCards from "@/components/Elements/TimelineCards.vue";

export default {
  components: {
    AdvancedTimeline,
    CardCenterLoader,
    CardHoverMusic,
    CardHoverPrice,
    CardOverlay,
    CardRating,
    CardHoverOverlay,
    ChipCardFilter,
    ChipCardShirt,
    ChipCardToothbrush,
    CircularLoader,
    ColorPicker,
    FilterChips,
    GroupSlider,
    IconChips,
    LoaderOverlay,
    LoadingDialogue,
    OppositeSlotTimeline,
    Overlay,
    ProgressBarLinearStream,
    ProgressCircular,

    TimelineInCard,
    TimelineLogger,
    TimelineOppositeSlot,
    TimelineCards
  },
  data() {
    return {
      nonce: 2,

      cardTypes: ["Places to Be", "Places to See"],
      cards: ["Good", "Best", "Finest"],
      socials: [
        {
          icon: "mdi-facebook",
          color: "indigo"
        },
        {
          icon: "mdi-linkedin",
          color: "cyan darken-1"
        },
        {
          icon: "mdi-instagram",
          color: "red lighten-3"
        }
      ]
    };
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },

    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  computed: {}
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
