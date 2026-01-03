import { useGSAP } from '@gsap/react';
import type { UseTypewriter } from '../types';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrambleTextPlugin);
const useTypewriter = ({textRef , messages , typingSpeed , delay ,deletingSpeed}:UseTypewriter) => {
    
  useGSAP(() => {
    const el = textRef.current 
    if (!el) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    messages.forEach((msg) => {
      const chars = Array.from(msg); // تحويل النص array من الحروف

      // كتابة النص حرف حرف
      tl.fromTo(
        {},
        { charIndex: 0 },
        {
          charIndex: chars.length,
          duration: typingSpeed,
          ease: "power1.inOut",
          onUpdate: function () {
            const index = Math.floor(this.targets()[0].charIndex);
            // نستخدم gsap.set بدل substring
            gsap.set(el, { textContent: chars.slice(0, index).join("") });
          },
        }
      )
        .to({}, { duration: delay })
        // مسح النص حرف حرف
        .fromTo(
          {},
          { charIndex: chars.length },
          {
            charIndex: 0,
            duration: deletingSpeed,
            ease: "power1.inOut",
            onUpdate: function () {
              const index = Math.floor(this.targets()[0].charIndex);
              gsap.set(el, { textContent: chars.slice(0, index).join("") });
            },
          }
        );
    });
    return () => {
      tl?.kill();
      el.textContent = ""; // نفض الـ textContent قبل تغيير اللغة
    };
  }, [messages]);

  return {}
}

export default useTypewriter