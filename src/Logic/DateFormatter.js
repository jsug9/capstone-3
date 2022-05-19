const currentDate = new Date();
const getYesterdayDate = () => new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

const dateFormatter = (date) => date.toISOString().split('T')[0];
const formattedDate = dateFormatter(getYesterdayDate());

export { formattedDate, dateFormatter };
