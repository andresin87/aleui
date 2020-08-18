import React from 'react';
import Button from '../src';

import './index.scss'

const designValues = ['solid', 'outline', 'flat', 'link'];
const negativeValues = [true, false];
const colorValues = [
  'primary',
  'accent',
  'neutral',
  'success',
  'alert',
  'error',
];

const style = {
  td: {
    textAlign: 'center',
  },
};

export default {
  title: 'atom/Button',
};

export const basicButton = () => <Button> Basic Button</Button>;
export const colors = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="secondary">Secondary Button</Button>
  </>
);
export const disabledButton = () => <Button disabled> Primary Button</Button>;

export const designs = () => (
  <>
    <table width="auto" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <td />
          {designValues.map((designName) => (
            <td style={style.td} colSpan="2">
              <p>{designName}</p>
            </td>
          ))}
          <td />
        </tr>
        <tr>
          <td />
          {designValues.map(() =>
            negativeValues.map((negativeValue) => (
              <td style={style.td}>
                <p>{negativeValue.toLocaleString()}</p>
              </td>
            ))
          )}
          <td />
        </tr>
      </thead>
      <tbody>
        {colorValues.map((color) => (
          <>
            <tr>
              <td style={{textAlign: 'right'}}>
                <p>{color}</p>
              </td>
              {designValues.map((design) =>
                negativeValues.map((negative) => (
                  <td style={style.td}>
                    <Button
                      id={`${design}-${negative}-${color}`}
                      key={`${design}-${negative}-${color}`}
                      design={design}
                      negative={negative}
                      color={color}
                    >{`${design} ${negative} ${color}`}</Button>
                  </td>
                ))
              )}
              <td style={{textAlign: 'left'}}>
                <p>{color}</p>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  </>
);
