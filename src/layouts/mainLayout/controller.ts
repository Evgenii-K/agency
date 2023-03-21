import { useStore } from 'src/store'

const useController = () => {
  const state = useStore()

  const onMountedCallback = async () => {
    void state.dispatch('general/updateLoader', false)
    await state.dispatch('general/loadReviews')
    void state.dispatch('general/updateLoader', true)
  }

  return {
    onMountedCallback
  }
}

export default useController
