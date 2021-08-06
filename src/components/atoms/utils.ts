import { Colors } from './interfaces';

/**
 * Set color
 * @param color : add bootstrap colors;
 */
export const getThemeColor = (color: Colors | any): string => `var(--${color})`;

/**
 * Format number with comma seperated value
 * @param number - add any amount of number
 */
export const formatNumber = (number: string | number = 0): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
