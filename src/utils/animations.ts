import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string | HTMLElement | HTMLElement[],
  animationProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      // toggleActions: "restart reverse restart reverse",
      once: true, // ✅ يشتغل مرة وحدة فقط

      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const stateWithGsap = (
  target: string | HTMLElement,
  counters: NodeListOf<Element>,
  animationProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
) => {
  counters.forEach((counter) => {
    const el = counter as HTMLElement;

    const targetData = Number(el.getAttribute("data-target"));

    if (!counters?.length) return;

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: targetData,
        snap: { innerText: 1 },
        ...animationProps,
        scrollTrigger: {
          trigger: target,
          start: "top 90%",
          ...scrollProps,
        },
        onUpdate() {
          const value = Math.floor(Number(el.innerText));
          el.innerText = new Intl.NumberFormat("en-US").format(value);
        },
      }
    );
  });
};

export const animateFromToWithGsap = (
  target: string | HTMLElement | HTMLElement[],
  fromProps: gsap.TweenVars,
  toProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
): void => {
  gsap.fromTo(
    target,
    {
      ...fromProps,
    },
    {
      ...toProps,
      scrollTrigger: {
        trigger: Array.isArray(target) ? target[0] : target,
        // toggleActions: "restart reverse restart reverse",
        once: true, // ✅ يشتغل مرة وحدة فقط
        start: "top 80%",
        ...scrollProps,
      },
    }
  );
};
