const currentDate = new Date();
const dateFormatter = (date) => date.toISOString().split('T')[0];
const formattedDate = dateFormatter(currentDate);

export { formattedDate, dateFormatter };
