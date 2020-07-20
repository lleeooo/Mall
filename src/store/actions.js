export default{
  addCart(context, payload) {
    /** 
     * payload添加商品
     * 思路： 1.一开始的carList里面为空 所以不会走遍历forEach，同时oldProduct里面也没东西，最终是payload里面添加了一个count进行计数（现在为1），同时将这个传进来的商品信息push到carList里面
     * 
     *2.我们再传入另一个不同商品，因为此时carList里面已经有了一个商品数据了，所以会走遍历，但是因为是不同的商品，所以iid不同，所以oldProduct也是没有值，最后新的商品信息payload里面会添加上一个count 此时这个商品的count为1 ，并被push到carList里
     *
     *3.我们传入第三个商品，这个商品和第一个商品相同，先进行遍历，发现carList里面的一个商品和我们传入的这个商品iid相同，所以将carList里面的这个商品（在carList里面的商品都是有count的）赋值到oldProduct里面进行映射，又因为oldProduct有值，表示carList里面已经是有这个商品了，我们将oldProduct也就是carList里的这个商品的count再+1 让它等于2

     */

    let oldProduct = null
    context.state.cartList.forEach(ele => {
      if (ele.iid === payload.iid) {
        oldProduct = ele
      }
    })

    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCount', oldProduct)
    } else {
      payload.count += 1
      // state.cartList.push(payload)
      context.commit('addToCart', payload)
    }

  }
}