import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation(options = {}) {
  const elementRef = ref(null)
  const isVisible = ref(false)
  
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    delay = 0
  } = options

  let observer = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible.value = true
              if (once && observer) {
                observer.unobserve(entry.target)
              }
            }, delay)
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(elementRef.value)
  })

  onBeforeUnmount(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    elementRef,
    isVisible
  }
}

