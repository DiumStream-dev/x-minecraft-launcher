declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
declare module '*.webp' {
  const value: string
  export default value
}
declare module 'vue-particles' {
  const module: import('vue').PluginObject<any>
  export default module
}
declare module 'vue-virtual-scroll-list' {
  import { Component } from 'vue'
  const component: Component<any, any, any, { size: number; remain: number }>
  export = component
}
