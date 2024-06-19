import { Box } from "@chakra-ui/react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const WebinarCard = () => {
  return (
    <Box>
      <MediaPlayer
        title="Sprite Fight"
        src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </Box>
  );
};

export default WebinarCard;
