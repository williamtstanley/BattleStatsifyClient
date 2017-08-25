import moment from 'moment';

const formatText = (text) => {
  text = text.replace('_',' ') 
  return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`
}

const getDuration = (d) => {
  const duration = moment.duration(d * 1000)
  return `${duration.minutes()}:${duration.seconds()}`
}

const formatThousands = (n) => {
  return n < 1000 ? n : (n / 1000).toFixed(1) + 'k';
}

const getPerMin = (delta) => {
  return (Object.keys(delta).map((k) => delta[k]).reduce((a, b) => a + b) / 3).toFixed()
}

export { formatText, getDuration, formatThousands, getPerMin };
