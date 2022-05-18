import moment from 'moment'

export const formatTimeFromNow = (time: string | null | undefined) => {
  if (time === null || time === undefined) return ''
  return moment(time).fromNow()
}
