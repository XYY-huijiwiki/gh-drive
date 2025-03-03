import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { type Ref, ref } from 'vue'
import { cloneDeep } from 'lodash-es'

interface Settings {
  language: string | 'auto'
  rootReleaseId: 202273771
  ghToken: string
  ghOwner: 'XYY-huijiwiki'
  ghRepo: 'files'
  ghRelease: 'eOsizdoz'
  fileListPageSize: number
}

export const useSettingsStore = defineStore('settings', () => {
  // define default settings
  const defaultSettings: Settings = {
    language: 'auto',
    ghToken: '',
    rootReleaseId: 202273771,
    ghOwner: 'XYY-huijiwiki',
    ghRepo: 'files',
    ghRelease: 'eOsizdoz',
    fileListPageSize: 50
  }
  // init settings from localStorage or use default settings
  const settings: Ref<Settings> = useLocalStorage('settings', defaultSettings, {
    mergeDefaults: true
  })

  // function of reset settings
  function resetSettings(): void {
    settings.value = cloneDeep(defaultSettings)
  }

  // global state
  const globalLoading = ref(false)

  return { settings, resetSettings, globalLoading }
})
