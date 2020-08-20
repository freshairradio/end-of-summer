import { readable } from 'svelte/store'
import moment from 'moment'
export const time = readable(moment('2020-08-22').fromNow(), function start(
  set
) {
  const interval = setInterval(() => {
    set(moment('2020-08-22').fromNow())
  }, 1000)

  return function stop() {
    clearInterval(interval)
  }
})
