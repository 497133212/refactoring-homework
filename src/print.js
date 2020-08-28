function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  return outstanding;
}

function printDetails(invoice) {
  let outstanding = calculateOutstanding(invoice);

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function printOwing (invoice) {
  printDetails(invoice);
}

module.exports = {
  printOwing
};
