"use client";

import type { ComponentType } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function withScrollAnimation<P extends object>(
  Component: ComponentType<P>,
  delay = 0
) {
  function ScrollAnimatedComponent(props: P) {
    return (
      <AnimateOnScroll delay={delay}>
        <Component {...props} />
      </AnimateOnScroll>
    );
  }

  ScrollAnimatedComponent.displayName = `withScrollAnimation(${Component.name || "Component"})`;

  return ScrollAnimatedComponent;
}
