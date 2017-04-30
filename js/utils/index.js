const WEEK = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];

export const formatDate = (date) => {
  const dayName = WEEK[date.getDay()];
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return {
    episode: dayName + '_' + day + month + year,
    label: dayName + ' ' + day + '-' + month + '-' + year
  };
};

const formatNumber = n => n < 10 ? '0' + n : n;

export const getWeek = () => {
  let week = [];

  WEEK.map((dayName, i) => {
    const today = new Date();
    const beforeLunch = today.getHours() < 16 ? 1 : 0;
    const date = new Date(today.setDate(today.getDate() - i - beforeLunch));
    const day = date.getDay();
    if(day !== 6 && day !== 0) {
      week.push(formatDate(date));
    }
  });

  return week;
};
