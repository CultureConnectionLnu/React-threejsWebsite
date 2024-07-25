import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import * as math from "mathjs";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (data.fill) {
      data.fill.classList.add("top-0");
      data.fill.classList.add("absolute");
    }

    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = math.floor(data.scroll.current * (data.pages - 1));
    if (curSection !== section) {
      onSectionChange(curSection);
    }

    lastScroll.current = data.scroll.current;
    console.log("current section: " + curSection);
  });

  return null;
};
