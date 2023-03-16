import { useStore } from 'src/store'

const useController = () => {
  const state = useStore()

  const onMountedCallback = async () => {
    void state.dispatch('general/switchLoader', false)
    await state.dispatch('general/loadReviews')
    void state.dispatch('general/switchLoader', true)
  }

  return {
    onMountedCallback
  }
}

export default useController
