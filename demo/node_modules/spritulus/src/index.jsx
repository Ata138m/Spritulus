import { useEffect, useRef, useState } from 'react';

export default function Spritulus({ id, animationName, flipped = false }) {
    const animationTimeout = useRef(null),
        [offsetX, setOffsetX] = useState(0),
        [offsetY, setOffsetY] = useState(0),
        [height, setHeight] = useState(200),
        [width, setWidth] = useState(200),
        [spriteData, setSpriteData] = useState(null),
        [animation, setAnimation] = useState(null),
        [isFlipped, setIsFlipped] = useState(flipped);

    useEffect(() => {
        if (!spriteData) {
            fetch(`/sprite-${id}.json`)
                .then(res => res.json())
                .then(data => {
                  let animationIndex = data.animations.findIndex(anim => anim.name.toLowerCase() === animationName.toLowerCase());

                  if (animationIndex < 0) {
                    animationIndex = 0;
                  }

                  setHeight(data.size.height);
                  setWidth(data.size.width);
                  setAnimation(data.animations[animationIndex] || data.animations[0]);
                  setOffsetY(animationIndex * data.size.height + (isFlipped ? (data.animations.length * data.size.height) : 0));
                  setSpriteData(data);
                });
        }
    }, [id]);

    useEffect(() => {
        const animate = () => {
            if (!animation || animation.frames <= 1) {
                return;
            }

            frameIndex = (frameIndex + 1) % animation.frames;
            setOffsetX(width * frameIndex);
            animationTimeout.current = setTimeout(animate, 128);
        }

        let frameIndex = 0;

        if (spriteData) {
            animate();
        }

        return () => {
            clearTimeout(animationTimeout.current);
        }
    }, [spriteData, animation, height, width]);

  useEffect(() => {
      setIsFlipped(flipped);
  }, [flipped]);

  useEffect(() => {
      if (spriteData) {
          let animationIndex = spriteData.animations.findIndex(anim => anim.name.toLowerCase() === animationName.toLowerCase());

          if (animationIndex < 0) {
            animationIndex = 0;
          }

          setAnimation(spriteData.animations[animationIndex] || spriteData.animations[0]);
          setOffsetY(animationIndex * spriteData.size.height + (isFlipped ? (spriteData.animations.length * spriteData.size.height) : 0));
      }
  }, [animationName, isFlipped, spriteData]);

  return (
    <div
      style={{
        width: width + 'px',
        height: height + 'px',
        overflow: 'hidden',
        backgroundPosition: offsetX + 'px ' + -offsetY + 'px',
        backgroundImage: `url('/sprite-${id}.png')`,
      }}
    />
  );
}
