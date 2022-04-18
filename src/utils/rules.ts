import moment, { Moment } from 'moment';
import { REQUIRED_INPUT_RULE } from './constant';

export const rules = {
  required: (message: string = REQUIRED_INPUT_RULE) => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
