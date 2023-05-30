import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  gsapClass: () => {
    return gsap
  },

  yAxisPin: (element, trigger, distance, end) =>
    gsap
      .timeline({
        defaults: {
          ease: 'Power1.easeInOut',
          rotation: 0.001
        },
        scrollTrigger: {
          trigger: trigger,
          start: 'top 0',
          end: end,
          toggleActions: 'play none none reverse',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })
      .to(element, { y: distance }),

  randomMovement1: (element) => {
    gsap
      .timeline({
        defaults: {
          repeat: -1,
          duration: 6,
          ease: 'none',
          repeatRefresh: true
        }
      })
      .to(element, { x: 480, repeat: -1, yoyo: true })
      .to(element, { y: 280, repeat: -1, yoyo: true }, 0)
      .to(element, { x: 280, repeat: -1, yoyo: true }, 0)
      .to(element, { y: 480, repeat: -1, yoyo: true }, 0)
  },

  randomMovement2: (element) => {
    gsap
      .timeline({
        defaults: {
          repeat: -1,
          duration: 6,
          ease: 'none',
          repeatRefresh: true
        }
      })
      .to(element, { x: -300, repeat: -1, yoyo: true })
      .to(element, { y: -180, repeat: -1, yoyo: true }, 0)
      .to(element, { x: -180, repeat: -1, yoyo: true }, 0)
      .to(element, { y: -300, repeat: -1, yoyo: true }, 0)
  }
}
