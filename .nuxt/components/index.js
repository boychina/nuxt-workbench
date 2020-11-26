export { default as Logo } from '../../components/Logo.vue'
export { default as WaterList } from '../../components/WaterList.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyWaterList = import('../../components/WaterList.vue' /* webpackChunkName: "components/WaterList" */).then(c => c.default || c)
