module.exports = {
  credits: 42,
  incomingTransactions: [],
  outgoingTransactions: [],
  orders: {},
  calcTransactionCost: function(amount, roomName1, roomName2) { return 42; },
  cancelOrder: function (orderId) { return OK; },
  changeOrderPrice: function (orderId, newPrice) { return OK; },
  createOrder: function (type, resourceType, price, totalAmount, roomName) {
    return OK;
  },
  deal: function(orderId, amount, yourRoomName) { return OK; },
  extendOrder: function(orderId, addAmount) { return OK; },
  getAllOrders: function (filter = null) { return []; }
};
