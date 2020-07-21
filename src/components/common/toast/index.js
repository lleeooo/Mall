import Toast from './Toast'


const obj ={}

obj.install = function(Vue){
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.通过new的方法 根据组件构造器 可以创建一个组件对象
  const toast = new toastContrustor()

  //3.手动的将组件挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj


