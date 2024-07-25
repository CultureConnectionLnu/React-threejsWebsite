import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import * as math from "mathjs";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimation = useRef(false);

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimation.current = true;
      },
      onComplete: () => {
        isAnimation.current = false;
      }
    })
  }, [section]);

  useFrame(() => {
    if (isAnimation.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
      console.log(data.scroll)
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
      console.log(data.scroll)
    }
    lastScroll.current = data.scroll.current;
  });
  return null;
};
