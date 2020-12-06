// function createSpy(targetFun) {
//   console.log('外层argument', arguments);
//   const spy = function () {
//     console.log('内层argument', arguments);
//     spy.args = arguments;
//     spy.returnValue = targetFun.apply(this, arguments);
//     return spy.returnValue ;
//   };
//   return spy;
// }

// const post = sinon.stub(vm.$http, 'post')
// const expectURL = '/users';
// const expectParams = {
//   firstName: 'Expected first name',
//   lastName: 'Expected last name'
// };
// const user = {
//   firstName: expectParams.firstName,
//   lastName: expectParams.lastName,
// };
// saveUsers(user, () => {});
// post.restore();
// sinon.assert.calledWidth(post, expectURL, expectParams);

// const sum = (a, b) => a + b;
// const spiedSum = createSpy(sum);
// spiedSum(10, 5);
// console.log(spiedSum.returnValue);