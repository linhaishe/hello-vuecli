let moduleA = {
  //里面的属性名不会和主store的属性名冲突，即使名字一样
  state: () => ({ count: 0 }),
  mutations: { aFunc() {} },
  actions: { bFunc() {} },
  getters: { cFunc() {} },
};

export default moduleA;
